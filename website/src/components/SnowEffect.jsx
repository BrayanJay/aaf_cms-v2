import { useEffect, useState } from 'react';
import './SnowEffect.css';

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate snowflakes
    const flakes = [];
    const numberOfSnowflakes = 50; // Adjust for more or fewer snowflakes

    for (let i = 0; i < numberOfSnowflakes; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100, // Random horizontal position (%)
        animationDuration: Math.random() * 3 + 2, // Random fall duration (2-5s)
        animationDelay: Math.random() * 5, // Random start delay (0-5s)
        size: Math.random() * 10 + 5, // Random size (5-15px)
        opacity: Math.random() * 0.6 + 0.4, // Random opacity (0.4-1)
      });
    }

    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
