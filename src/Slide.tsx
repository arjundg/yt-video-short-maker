import React from 'react';
import {AbsoluteFill, Audio, useCurrentFrame} from 'remotion';
import ZoomImage from './ZoomImage';
import AnimatedText from './AnimatedText';

interface SlideProps {
  slide: {
    image: string;
    zoom: 'in' | 'out';
    text: string;
    duration: number;
    audio: string;
  };
}

const Slide: React.FC<SlideProps> = ({slide}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ZoomImage src={slide.image} zoomDirection={slide.zoom} duration={slide.duration} />
      <AnimatedText text={slide.text} duration={slide.duration} />
      <Audio src={slide.audio} />
    </AbsoluteFill>
  );
};

export default Slide;