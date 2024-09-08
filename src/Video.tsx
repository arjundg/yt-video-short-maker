import React from 'react';
import {Composition, staticFile, Series} from 'remotion';
import Slide from './Slide';
import config from './config.json';

export const RemotionVideo: React.FC = () => {
  const fps = 30;
  const totalDurationInSeconds = config.sequence.reduce((sum, slide) => sum + slide.duration, 0);
  const durationInFrames = Math.ceil(totalDurationInSeconds * fps);

  return (
    <Composition
      id="Video"
      component={Video}
      durationInFrames={durationInFrames}
      fps={fps}
      width={1920}
      height={1080}
    />
  );
};

const Video: React.FC = () => {
  return (
    <Series>
      {config.sequence.map((slide, index) => (
        <Series.Sequence durationInFrames={slide.duration * 30} key={index}>
          <Slide
            slide={{
              ...slide,
              image: staticFile(slide.image),
              audio: staticFile(slide.audio)
            }}
          />
        </Series.Sequence>
      ))}
    </Series>
  );
};

export default Video;