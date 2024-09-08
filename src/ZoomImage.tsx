import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, Img} from 'remotion';

interface ZoomImageProps {
  src: string;
  zoomDirection: 'in' | 'out';
  duration: number;
}

const ZoomImage: React.FC<ZoomImageProps> = ({src, zoomDirection, duration}) => {
  const frame = useCurrentFrame();
  const zoomDuration = Math.min(duration * 30, 60); // Limit zoom duration to 2 seconds (60 frames)
  const zoom = interpolate(
    frame,
    [0, zoomDuration],
    zoomDirection === 'in' ? [1, 1.2] : [1.2, 1],
    {
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      <Img
        src={src}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${zoom})`,
        }}
      />
    </AbsoluteFill>
  );
};

export default ZoomImage;