import { useState, useEffect } from 'react';

interface WearableData {
  heartRate: number;
  heartRateChange: number;
  steps: number;
  stepsChange: number;
  sleepScore: number;
  sleepChange: number;
  weeklyScore: number;
  weeklyChange: number;
}

export const useWearableData = () => {
  const [latestData, setLatestData] = useState<WearableData | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setLatestData({
        heartRate: 65 + Math.floor(Math.random() * 20),
        heartRateChange: Math.floor(Math.random() * 10) - 5,
        steps: 8000 + Math.floor(Math.random() * 2000),
        stepsChange: Math.floor(Math.random() * 15),
        sleepScore: 80 + Math.floor(Math.random() * 15),
        sleepChange: Math.floor(Math.random() * 10) - 5,
        weeklyScore: 85 + Math.floor(Math.random() * 10),
        weeklyChange: Math.floor(Math.random() * 10) - 2,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const connect = async () => {
    try {
      // Implementation for real device connection would go here
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to connect:', error);
      setIsConnected(false);
    }
  };

  const disconnect = () => {
    setIsConnected(false);
  };

  return {
    latestData,
    isConnected,
    connect,
    disconnect
  };
};