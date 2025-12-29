import React from 'react';
import type { IconProps } from '../../types';

export const TrafficLightStop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,9c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm0,6c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm0-4c-.552,0-1,.449-1,1s.448,1,1,1,1-.449,1-1-.448-1-1-1Zm0,10c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm0-4c-.552,0-1,.449-1,1s.448,1,1,1,1-.449,1-1-.448-1-1-1Zm3,7h-6c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h6c2.757,0,5,2.243,5,5v14c0,2.757-2.243,5-5,5ZM9,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3h-6Z"/></svg>
);

TrafficLightStop.displayName = 'TrafficLightStop';
