import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import voidFront from '@/assets/void-front.png';
import voidSide from '@/assets/void-side.png';
import punkFront from '@/assets/punk-front.png';
import buddyFront from '@/assets/buddy-front.png';
import voidStreetScene from '@/assets/void-street-scene.png';

interface SkateGameProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Trick = 'kickflip' | 'ollie' | 'grind' | null;

export const SkateGame = ({ open, onOpenChange }: SkateGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameLoopRef = useRef<number>();

  useEffect(() => {
    if (!open || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game state
    const game = {
      player: {
        x: 150,
        y: 400,
        width: 70,
        height: 100,
        velocityY: 0,
        velocityX: 0,
        baseSpeed: 8,
        currentSpeed: 8,
        jumpPower: -18,
        gravity: 0.9,
        isJumping: false,
        rotation: 0,
        rotationSpeed: 0,
        currentTrick: null as Trick,
        trickTimer: 0,
        comboMultiplier: 1,
        lastTrickTime: 0,
      },
      obstacles: [] as Array<{ x: number; y: number; width: number; height: number; type: string; passed: boolean }>,
      ramps: [] as Array<{ x: number; y: number; width: number; height: number; passed: boolean }>,
      collectibles: [] as Array<{ x: number; y: number; collected: boolean; type: string; points: number }>,
      particles: [] as Array<{ x: number; y: number; vx: number; vy: number; life: number; color: string }>,
      background: { scroll: 0, speed: 4 },
      keys: {} as Record<string, boolean>,
      gameOver: false,
      score: 0,
      combo: 0,
      groundLevel: 450,
      speedBoost: 1,
    };

    // Load images
    const images = {
      player: new Image(),
      background: new Image(),
      obstacle1: new Image(),
      obstacle2: new Image(),
    };

    images.player.src = voidFront;
    images.background.src = voidStreetScene;
    images.obstacle1.src = punkFront;
    images.obstacle2.src = buddyFront;

    // Input handling
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!game.keys[key]) {
        game.keys[key] = true;
        
        // Jump
        if ((key === ' ' || key === 'w' || key === 'arrowup') && !game.player.isJumping) {
          game.player.velocityY = game.player.jumpPower;
          game.player.isJumping = true;
          game.player.currentTrick = 'ollie';
          game.player.trickTimer = 20;
        }
        
        // Tricks during jump
        if (game.player.isJumping && game.player.velocityY < 0) {
          if (key === 'z' || key === '1') {
            game.player.currentTrick = 'kickflip';
            game.player.rotationSpeed = 20;
            game.player.trickTimer = 30;
          } else if (key === 'x' || key === '2') {
            game.player.currentTrick = 'grind';
            game.player.trickTimer = 25;
          }
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      game.keys[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    // Create particles
    const createParticles = (x: number, y: number, color: string, count: number = 8) => {
      for (let i = 0; i < count; i++) {
        game.particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * -8 - 2,
          life: 30 + Math.random() * 20,
          color,
        });
      }
    };

    // Spawn obstacles and ramps
    const spawnObstacle = () => {
      if (Math.random() < 0.015) {
        game.obstacles.push({
          x: canvas.width,
          y: game.groundLevel + 20,
          width: 50,
          height: 70,
          type: Math.random() > 0.5 ? 'punk' : 'buddy',
          passed: false,
        });
      }
      
      // Spawn ramps occasionally
      if (Math.random() < 0.008 && game.ramps.length < 2) {
        game.ramps.push({
          x: canvas.width,
          y: game.groundLevel,
          width: 120,
          height: 80,
          passed: false,
        });
      }
    };

    // Spawn collectibles
    const spawnCollectible = () => {
      if (Math.random() < 0.02) {
        const isHighValue = Math.random() > 0.7;
        game.collectibles.push({
          x: canvas.width,
          y: Math.random() * 150 + 250,
          collected: false,
          type: isHighValue ? 'gem' : 'star',
          points: isHighValue ? 50 : 10,
        });
      }
    };

    // Update game logic
    const update = () => {
      if (game.gameOver) return;

      // Auto-forward movement with speed boost
      game.player.currentSpeed = game.player.baseSpeed * game.speedBoost;
      
      // Trick timer
      if (game.player.trickTimer > 0) {
        game.player.trickTimer--;
        if (game.player.trickTimer === 0) {
          game.player.currentTrick = null;
        }
      }
      
      // Rotation for tricks
      if (game.player.rotationSpeed !== 0) {
        game.player.rotation += game.player.rotationSpeed;
        if (Math.abs(game.player.rotation) >= 360) {
          game.player.rotation = 0;
          game.player.rotationSpeed = 0;
        }
      }

      // Apply physics
      game.player.velocityY += game.player.gravity;
      game.player.y += game.player.velocityY;

      // Ground collision
      if (game.player.y >= game.groundLevel) {
        game.player.y = game.groundLevel;
        game.player.velocityY = 0;
        
        // Landing - score trick
        if (game.player.isJumping) {
          if (game.player.currentTrick) {
            const trickPoints = game.player.currentTrick === 'kickflip' ? 30 : 
                               game.player.currentTrick === 'grind' ? 25 : 10;
            const points = trickPoints * game.player.comboMultiplier;
            game.score += points;
            game.combo++;
            game.player.comboMultiplier = Math.min(5, 1 + game.combo * 0.5);
            createParticles(game.player.x + 35, game.player.y, '#ffd700', 12);
            setScore(Math.floor(game.score));
            setCombo(game.combo);
            game.player.lastTrickTime = Date.now();
          }
          game.player.isJumping = false;
          game.player.rotation = 0;
          game.player.rotationSpeed = 0;
        }
        
        // Reset combo if no trick for 2 seconds
        if (Date.now() - game.player.lastTrickTime > 2000 && game.combo > 0) {
          game.combo = 0;
          game.player.comboMultiplier = 1;
          setCombo(0);
        }
      }

      // Background scrolling
      game.background.scroll += game.background.speed * game.speedBoost;
      if (game.background.scroll >= canvas.width) {
        game.background.scroll = 0;
      }

      // Update particles
      game.particles = game.particles.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5;
        p.life--;
        return p.life > 0;
      });

      // Update obstacles
      const scrollSpeed = 6 * game.speedBoost;
      game.obstacles = game.obstacles.filter(obstacle => {
        obstacle.x -= scrollSpeed;
        
        // Score points for passing obstacles
        if (!obstacle.passed && obstacle.x + obstacle.width < game.player.x) {
          obstacle.passed = true;
          game.score += 15;
          setScore(Math.floor(game.score));
        }
        
        // Collision detection (only if not jumping high enough)
        if (
          game.player.x < obstacle.x + obstacle.width - 10 &&
          game.player.x + game.player.width > obstacle.x + 10 &&
          game.player.y + game.player.height > obstacle.y + 10
        ) {
          game.gameOver = true;
          createParticles(game.player.x + 35, game.player.y + 50, '#e94560', 20);
        }

        return obstacle.x > -obstacle.width;
      });
      
      // Update ramps
      game.ramps = game.ramps.filter(ramp => {
        ramp.x -= scrollSpeed;
        
        // Ramp physics
        if (
          !ramp.passed &&
          game.player.x + game.player.width > ramp.x &&
          game.player.x < ramp.x + ramp.width &&
          game.player.y + game.player.height >= ramp.y
        ) {
          if (!game.player.isJumping) {
            game.player.velocityY = game.player.jumpPower * 1.3;
            game.player.isJumping = true;
            game.speedBoost = 1.5;
            createParticles(ramp.x + ramp.width / 2, ramp.y, '#00ff88', 15);
          }
          ramp.passed = true;
        }
        
        return ramp.x > -ramp.width;
      });
      
      // Decay speed boost
      if (game.speedBoost > 1) {
        game.speedBoost -= 0.01;
      }

      // Update collectibles
      game.collectibles = game.collectibles.filter(collectible => {
        collectible.x -= scrollSpeed;
        
        if (
          !collectible.collected &&
          game.player.x < collectible.x + 30 &&
          game.player.x + game.player.width > collectible.x &&
          game.player.y < collectible.y + 30 &&
          game.player.y + game.player.height > collectible.y
        ) {
          collectible.collected = true;
          const points = collectible.points * Math.floor(game.player.comboMultiplier);
          game.score += points;
          setScore(Math.floor(game.score));
          createParticles(collectible.x + 15, collectible.y + 15, collectible.type === 'gem' ? '#ff00ff' : '#ffd700', 10);
        }

        return collectible.x > -30 && !collectible.collected;
      });

      // Spawn new entities
      spawnObstacle();
      spawnCollectible();

      // Base score increment
      game.score += 0.2;
      if (Math.floor(game.score) % 100 === 0 && Math.floor(game.score) !== 0) {
        setScore(Math.floor(game.score));
      }
    };

    // Render game
    const render = () => {
      // Clear canvas with gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#0f1419');
      bgGradient.addColorStop(1, '#1a1f2e');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw scrolling background
      if (images.background.complete) {
        ctx.globalAlpha = 0.4;
        ctx.drawImage(images.background, -game.background.scroll, 0, canvas.width, canvas.height);
        ctx.drawImage(images.background, canvas.width - game.background.scroll, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      }

      // Draw ground with glow
      const groundGradient = ctx.createLinearGradient(0, game.groundLevel + 60, 0, canvas.height);
      groundGradient.addColorStop(0, '#00ff8844');
      groundGradient.addColorStop(1, '#16213e');
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, game.groundLevel + 60, canvas.width, canvas.height);
      
      // Ground line
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, game.groundLevel + 60);
      ctx.lineTo(canvas.width, game.groundLevel + 60);
      ctx.stroke();

      // Draw ramps
      game.ramps.forEach(ramp => {
        const rampGradient = ctx.createLinearGradient(ramp.x, ramp.y, ramp.x + ramp.width, ramp.y + ramp.height);
        rampGradient.addColorStop(0, '#00ff8866');
        rampGradient.addColorStop(1, '#00ff8833');
        ctx.fillStyle = rampGradient;
        ctx.beginPath();
        ctx.moveTo(ramp.x, ramp.y + ramp.height);
        ctx.lineTo(ramp.x + ramp.width, ramp.y + ramp.height);
        ctx.lineTo(ramp.x + ramp.width, ramp.y);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      
      // Draw obstacles with glow
      game.obstacles.forEach(obstacle => {
        const img = obstacle.type === 'punk' ? images.obstacle1 : images.obstacle2;
        
        // Glow effect
        ctx.shadowColor = '#e94560';
        ctx.shadowBlur = 15;
        
        if (img.complete) {
          ctx.drawImage(img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        } else {
          ctx.fillStyle = '#e94560';
          ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        }
        
        ctx.shadowBlur = 0;
      });

      // Draw collectibles with animation
      const time = Date.now() / 100;
      game.collectibles.forEach(collectible => {
        const pulse = Math.sin(time) * 3;
        const size = 15 + pulse;
        
        // Glow
        ctx.shadowColor = collectible.type === 'gem' ? '#ff00ff' : '#ffd700';
        ctx.shadowBlur = 20;
        
        ctx.fillStyle = collectible.type === 'gem' ? '#ff00ff' : '#ffd700';
        ctx.beginPath();
        ctx.arc(collectible.x + 15, collectible.y + 15, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#000';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(collectible.type === 'gem' ? '◆' : '★', collectible.x + 15, collectible.y + 23);
        ctx.textAlign = 'left';
      });
      
      // Draw particles
      game.particles.forEach(p => {
        ctx.globalAlpha = p.life / 50;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Draw player with rotation and glow
      ctx.save();
      
      // Player glow
      if (game.player.currentTrick) {
        ctx.shadowColor = '#00ff88';
        ctx.shadowBlur = 25;
      }
      
      // Translate to player center for rotation
      ctx.translate(game.player.x + game.player.width / 2, game.player.y + game.player.height / 2);
      ctx.rotate((game.player.rotation * Math.PI) / 180);
      
      if (images.player.complete) {
        ctx.drawImage(
          images.player,
          -game.player.width / 2,
          -game.player.height / 2,
          game.player.width,
          game.player.height
        );
      } else {
        ctx.fillStyle = '#00ff88';
        ctx.fillRect(-game.player.width / 2, -game.player.height / 2, game.player.width, game.player.height);
      }
      
      ctx.restore();
      ctx.shadowBlur = 0;
      
      // Draw trick name
      if (game.player.currentTrick && game.player.trickTimer > 0) {
        ctx.font = 'bold 24px Manrope';
        ctx.fillStyle = '#00ff88';
        ctx.textAlign = 'center';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 5;
        const trickName = game.player.currentTrick.toUpperCase();
        ctx.fillText(trickName, game.player.x + 35, game.player.y - 20);
        ctx.shadowBlur = 0;
        ctx.textAlign = 'left';
      }

      // Draw HUD with style
      ctx.font = 'bold 32px Manrope';
      ctx.fillStyle = '#00ff88';
      ctx.shadowColor = '#000';
      ctx.shadowBlur = 5;
      ctx.fillText(`${Math.floor(game.score)}`, 30, 50);
      
      if (game.combo > 0) {
        ctx.font = 'bold 24px Manrope';
        ctx.fillStyle = '#ffd700';
        ctx.fillText(`x${game.combo} COMBO!`, 30, 85);
        ctx.fillText(`MULTIPLIER: ${game.player.comboMultiplier.toFixed(1)}x`, 30, 115);
      }
      
      ctx.shadowBlur = 0;

      // Draw controls hint
      ctx.font = '14px Manrope';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.textAlign = 'right';
      ctx.fillText('SPACE = JUMP', canvas.width - 20, 40);
      ctx.fillText('Z = KICKFLIP | X = GRIND', canvas.width - 20, 60);
      ctx.textAlign = 'left';

      // Game over screen
      if (game.gameOver) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = 'bold 64px Manrope';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#e94560';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 10;
        ctx.fillText('WIPEOUT!', canvas.width / 2, canvas.height / 2 - 50);
        
        ctx.font = 'bold 32px Manrope';
        ctx.fillStyle = '#00ff88';
        ctx.fillText(`Score: ${Math.floor(game.score)}`, canvas.width / 2, canvas.height / 2 + 20);
        
        if (game.combo > 0) {
          ctx.font = '24px Manrope';
          ctx.fillStyle = '#ffd700';
          ctx.fillText(`Best Combo: x${game.combo}`, canvas.width / 2, canvas.height / 2 + 60);
        }
        
        ctx.font = '20px Manrope';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('Press R to restart', canvas.width / 2, canvas.height / 2 + 110);
        ctx.shadowBlur = 0;
        ctx.textAlign = 'left';

        if (game.keys['r']) {
          game.gameOver = false;
          game.score = 0;
          game.combo = 0;
          game.obstacles = [];
          game.ramps = [];
          game.collectibles = [];
          game.particles = [];
          game.player.x = 150;
          game.player.y = game.groundLevel;
          game.player.comboMultiplier = 1;
          game.speedBoost = 1;
          setScore(0);
          setCombo(0);
        }
      }
    };

    // Game loop
    const gameLoop = () => {
      update();
      render();
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    if (gameStarted) {
      gameLoop();
    } else {
      // Draw start screen with animated elements
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#0f1419');
      bgGradient.addColorStop(1, '#1a1f2e');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (images.background.complete) {
        ctx.globalAlpha = 0.2;
        ctx.drawImage(images.background, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      }
      
      // Animated title
      const titlePulse = Math.sin(Date.now() / 300) * 5;
      ctx.font = 'bold 72px Manrope';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#00ff88';
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 20 + titlePulse;
      ctx.fillText('VOID SKATER', canvas.width / 2, canvas.height / 2 - 80);
      
      ctx.shadowBlur = 0;
      ctx.font = '28px Manrope';
      ctx.fillStyle = '#fff';
      ctx.fillText('Press SPACE to start', canvas.width / 2, canvas.height / 2);
      
      ctx.font = '18px Manrope';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fillText('Infinite skate through the void', canvas.width / 2, canvas.height / 2 + 40);
      
      ctx.font = '16px Manrope';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillText('Do tricks to build combos and boost your score', canvas.width / 2, canvas.height / 2 + 80);
      
      ctx.textAlign = 'left';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [open, gameStarted]);

  const handleStart = () => {
    setGameStarted(true);
    setScore(0);
    setCombo(0);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-6">
        <DialogHeader>
          <DialogTitle className="heading-3">VOID SKATER — Streets of THEVOIDN13</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Infinite skate through the void. Perform tricks to build combos and maximize your score.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <canvas
            ref={canvasRef}
            width={1000}
            height={600}
            className="w-full border-2 border-primary/30 rounded-lg bg-black shadow-lg"
          />
          
          {!gameStarted && (
            <div className="flex justify-center">
              <Button onClick={handleStart} size="lg" className="text-lg px-8">
                Start Game
              </Button>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="font-bold text-primary">Score: <span className="text-foreground">{score}</span></p>
              {combo > 0 && <p className="font-bold text-yellow-500">Combo: x{combo}</p>}
            </div>
            <div className="text-right space-y-1 text-muted-foreground">
              <p>• Jump obstacles & collect items</p>
              <p>• Land tricks for combo multipliers</p>
              <p>• Use ramps for speed boosts</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
