import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import voidFront from '@/assets/void-front.png';
import voidRear from '@/assets/void-rear.png';
import voidSide from '@/assets/void-side.png';
import punkFront from '@/assets/punk-front.png';
import buddyFront from '@/assets/buddy-front.png';
import voidStreetScene from '@/assets/void-street-scene.png';

interface SkateGameProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SkateGame = ({ open, onOpenChange }: SkateGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
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
        x: 100,
        y: 400,
        width: 80,
        height: 120,
        velocityY: 0,
        velocityX: 0,
        speed: 5,
        jumpPower: -15,
        gravity: 0.8,
        isJumping: false,
        isCrouching: false,
        direction: 'right' as 'left' | 'right',
      },
      obstacles: [] as Array<{ x: number; y: number; width: number; height: number; type: string }>,
      collectibles: [] as Array<{ x: number; y: number; collected: boolean; type: string }>,
      background: { x: 0, scroll: 0 },
      keys: {} as Record<string, boolean>,
      gameOver: false,
      score: 0,
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
      game.keys[e.key.toLowerCase()] = true;
      
      if (e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') {
        if (!game.player.isJumping) {
          game.player.velocityY = game.player.jumpPower;
          game.player.isJumping = true;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      game.keys[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Spawn obstacles
    const spawnObstacle = () => {
      if (Math.random() < 0.02) {
        game.obstacles.push({
          x: canvas.width,
          y: 450,
          width: 60,
          height: 80,
          type: Math.random() > 0.5 ? 'punk' : 'buddy',
        });
      }
    };

    // Spawn collectibles
    const spawnCollectible = () => {
      if (Math.random() < 0.01) {
        game.collectibles.push({
          x: canvas.width,
          y: Math.random() * 200 + 200,
          collected: false,
          type: 'star',
        });
      }
    };

    // Update game logic
    const update = () => {
      if (game.gameOver) return;

      // Player movement
      if (game.keys['arrowleft'] || game.keys['a']) {
        game.player.velocityX = -game.player.speed;
        game.player.direction = 'left';
      } else if (game.keys['arrowright'] || game.keys['d']) {
        game.player.velocityX = game.player.speed;
        game.player.direction = 'right';
      } else {
        game.player.velocityX = 0;
      }

      // Crouch
      game.player.isCrouching = game.keys['arrowdown'] || game.keys['s'];

      // Apply gravity
      game.player.velocityY += game.player.gravity;
      game.player.y += game.player.velocityY;
      game.player.x += game.player.velocityX;

      // Ground collision
      const groundLevel = 400;
      if (game.player.y >= groundLevel) {
        game.player.y = groundLevel;
        game.player.velocityY = 0;
        game.player.isJumping = false;
      }

      // Keep player in bounds
      game.player.x = Math.max(50, Math.min(canvas.width - 100, game.player.x));

      // Background scrolling
      game.background.scroll += 2;
      if (game.background.scroll >= canvas.width) {
        game.background.scroll = 0;
      }

      // Update obstacles
      game.obstacles = game.obstacles.filter(obstacle => {
        obstacle.x -= 5;
        
        // Collision detection
        if (
          !game.player.isJumping &&
          game.player.x < obstacle.x + obstacle.width &&
          game.player.x + game.player.width > obstacle.x &&
          game.player.y < obstacle.y + obstacle.height &&
          game.player.y + game.player.height > obstacle.y
        ) {
          game.gameOver = true;
        }

        return obstacle.x > -obstacle.width;
      });

      // Update collectibles
      game.collectibles = game.collectibles.filter(collectible => {
        collectible.x -= 5;
        
        if (
          !collectible.collected &&
          game.player.x < collectible.x + 30 &&
          game.player.x + game.player.width > collectible.x &&
          game.player.y < collectible.y + 30 &&
          game.player.y + game.player.height > collectible.y
        ) {
          collectible.collected = true;
          game.score += 10;
          setScore(game.score);
        }

        return collectible.x > -30 && !collectible.collected;
      });

      // Spawn new entities
      spawnObstacle();
      spawnCollectible();

      // Increment score
      game.score += 0.1;
      setScore(Math.floor(game.score));
    };

    // Render game
    const render = () => {
      // Clear canvas
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw scrolling background
      if (images.background.complete) {
        ctx.drawImage(images.background, -game.background.scroll, 0, canvas.width, canvas.height);
        ctx.drawImage(images.background, canvas.width - game.background.scroll, 0, canvas.width, canvas.height);
      }

      // Draw ground
      ctx.fillStyle = '#16213e';
      ctx.fillRect(0, 520, canvas.width, 80);

      // Draw obstacles
      game.obstacles.forEach(obstacle => {
        const img = obstacle.type === 'punk' ? images.obstacle1 : images.obstacle2;
        if (img.complete) {
          ctx.drawImage(img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        } else {
          ctx.fillStyle = '#e94560';
          ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        }
      });

      // Draw collectibles
      game.collectibles.forEach(collectible => {
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(collectible.x + 15, collectible.y + 15, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.font = '20px Arial';
        ctx.fillText('★', collectible.x + 7, collectible.y + 24);
      });

      // Draw player
      const playerHeight = game.player.isCrouching ? game.player.height * 0.6 : game.player.height;
      const playerY = game.player.isCrouching ? game.player.y + game.player.height * 0.4 : game.player.y;
      
      if (images.player.complete) {
        ctx.save();
        if (game.player.direction === 'left') {
          ctx.scale(-1, 1);
          ctx.drawImage(images.player, -game.player.x - game.player.width, playerY, game.player.width, playerHeight);
        } else {
          ctx.drawImage(images.player, game.player.x, playerY, game.player.width, playerHeight);
        }
        ctx.restore();
      } else {
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(game.player.x, playerY, game.player.width, playerHeight);
      }

      // Draw HUD
      ctx.fillStyle = '#fff';
      ctx.font = '24px Manrope';
      ctx.fillText(`SCORE: ${Math.floor(game.score)}`, 20, 40);

      // Draw controls hint
      ctx.font = '16px Manrope';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fillText('← → MOVE | SPACE/↑ JUMP | ↓ CROUCH', canvas.width - 350, 40);

      // Game over screen
      if (game.gameOver) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = '48px Manrope';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
        ctx.font = '24px Manrope';
        ctx.fillText(`Final Score: ${Math.floor(game.score)}`, canvas.width / 2, canvas.height / 2 + 50);
        ctx.fillText('Press R to restart', canvas.width / 2, canvas.height / 2 + 90);
        ctx.textAlign = 'left';

        if (game.keys['r']) {
          game.gameOver = false;
          game.score = 0;
          game.obstacles = [];
          game.collectibles = [];
          game.player.x = 100;
          game.player.y = 400;
          setScore(0);
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
      // Draw start screen
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (images.background.complete) {
        ctx.globalAlpha = 0.3;
        ctx.drawImage(images.background, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      }
      
      ctx.fillStyle = '#fff';
      ctx.font = '48px Manrope';
      ctx.textAlign = 'center';
      ctx.fillText('VOID SKATER', canvas.width / 2, canvas.height / 2 - 50);
      ctx.font = '24px Manrope';
      ctx.fillText('Press SPACE to start', canvas.width / 2, canvas.height / 2 + 20);
      ctx.font = '18px Manrope';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText('Streets of Rage style skating adventure', canvas.width / 2, canvas.height / 2 + 60);
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
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-6">
        <DialogHeader>
          <DialogTitle className="heading-3">VOID SKATER — Streets of THEVOIDN13</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <canvas
            ref={canvasRef}
            width={1000}
            height={600}
            className="w-full border border-border rounded-lg bg-black"
          />
          
          {!gameStarted && (
            <div className="flex justify-center">
              <Button onClick={handleStart} size="lg">
                Start Game
              </Button>
            </div>
          )}
          
          <div className="text-center text-sm text-muted-foreground">
            <p>An experimental skate adventure through the void</p>
            <p className="mt-2">Score: {score}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
