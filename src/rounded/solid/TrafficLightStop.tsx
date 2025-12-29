import React from 'react';
import type { IconProps } from '../../types';

export const TrafficLightStop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,12c0,.551-.448,1-1,1s-1-.449-1-1,.448-1,1-1,1,.449,1,1Zm-1,6c-.552,0-1,.449-1,1s.448,1,1,1,1-.449,1-1-.448-1-1-1ZM20,5v14c0,2.757-2.243,5-5,5h-6c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h6c2.757,0,5,2.243,5,5Zm-5,14c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm0-7c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm0-7c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Z"/></svg>
);

TrafficLightStop.displayName = 'TrafficLightStop';
