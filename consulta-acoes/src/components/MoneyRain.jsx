import React, { useEffect, useState } from 'react';
import './MoneyRain.css';

const MoneyRain = ({ trigger }) => {
  const [emojis, setEmojis] = useState([]);

  // Efeito que inicia a chuva de emojis quando `trigger` é verdadeiro
  useEffect(() => {
    if (trigger) {
      // Intervalo para adicionar novos emojis na tela
      const interval = setInterval(() => {
        const newEmoji = {
          id: Math.random().toString(36).substring(7), // ID único
          left: Math.random() * 100, // Posição horizontal
          emoji: Math.random() > 0.5 ? '💵' : '💰', // Escolhe entre dois emojis
        };
        setEmojis((prev) => [...prev, newEmoji]);
      }, 150); // Frequência dos emojis

      // Interrompe a chuva após 3 segundos
      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 3000);

      // Limpa intervalos ao desmontar
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [trigger]);

  // Remove o emoji após animação
  const handleAnimationEnd = (id) => {
    setEmojis((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="money-rain-container">
      {emojis.map((e) => (
        <span
          key={e.id}
          className="money-emoji"
          style={{ left: `${e.left}%` }}
          onAnimationEnd={() => handleAnimationEnd(e.id)}
        >
          {e.emoji}
        </span>
      ))}
    </div>
  );
};

export default MoneyRain;
