import React from 'react';
import type { IconProps } from '../../types';

export const RunningTrack: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m16,9h-8c-1.654,0-3,1.346-3,3s1.346,3,3,3h8c1.654,0,3-1.346,3-3s-1.346-3-3-3Zm-1-5v3h-3v-3h3Zm9,8c0,4.411-3.589,8-8,8h-8C3.589,20,0,16.411,0,12S3.589,4,8,4h2v3h-2c-2.757,0-5,2.243-5,5s2.243,5,5,5h8c2.757,0,5-2.243,5-5,0-2.414-1.721-4.434-4-4.899v-3.032c3.94.495,7,3.859,7,7.931Z"/>
</svg>
);

RunningTrack.displayName = 'RunningTrack';
