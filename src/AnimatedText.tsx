import React from 'react';
import {AbsoluteFill, useCurrentFrame, spring} from 'remotion';
import config from './config.json';

interface AnimatedTextProps {
  text: string;
  duration: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({text, duration}) => {
  const frame = useCurrentFrame();
  const lines = text.split('\n');
  const lineDuration = (duration * 30) / lines.length;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...config.textStyle,
      }}
    >
      {lines.map((line, index) => {
        const isVisible = frame >= index * lineDuration;
        const progress = spring({
          frame: frame - index * lineDuration,
          fps: 30,
          config: {
            damping: 100,
            stiffness: 200,
            mass: 0.5,
          },
        });

        if (!isVisible) return null;

        return (
          <div
            key={index}
            style={{
              opacity: progress,
              transform: `translateY(${(1 - progress) * 20}px)`,
            }}
          >
            {line}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

export default AnimatedText;