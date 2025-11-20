import { useState, useEffect } from 'react';

export interface OracleScan {
  id: string;
  date: string;
  timestamp: number;
  archetypeScores: Record<string, number>;
  processScores: Record<string, number>;
  dominantArchetype: string;
  answers: number[];
}

const STORAGE_KEY = 'oracle_history';
const MAX_SCANS = 10; // Limite de scans salvos

export const useOracleHistory = () => {
  const [scans, setScans] = useState<OracleScan[]>([]);

  useEffect(() => {
    loadScans();
  }, []);

  const loadScans = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setScans(parsed);
      }
    } catch (error) {
      console.error('Error loading oracle history:', error);
    }
  };

  const saveScan = (scan: Omit<OracleScan, 'id' | 'date' | 'timestamp'>) => {
    try {
      const newScan: OracleScan = {
        ...scan,
        id: `scan_${Date.now()}`,
        date: new Date().toLocaleDateString('pt-BR'),
        timestamp: Date.now(),
      };

      const updatedScans = [newScan, ...scans].slice(0, MAX_SCANS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedScans));
      setScans(updatedScans);
      
      return newScan;
    } catch (error) {
      console.error('Error saving oracle scan:', error);
      return null;
    }
  };

  const deleteScan = (id: string) => {
    try {
      const updatedScans = scans.filter(scan => scan.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedScans));
      setScans(updatedScans);
    } catch (error) {
      console.error('Error deleting scan:', error);
    }
  };

  const clearHistory = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setScans([]);
    } catch (error) {
      console.error('Error clearing history:', error);
    }
  };

  return {
    scans,
    saveScan,
    deleteScan,
    clearHistory,
    hasHistory: scans.length > 0,
  };
};
