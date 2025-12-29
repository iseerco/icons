import React from 'react';
import type { IconProps } from '../../types';

export const TrafficLightGo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,0H7c-1.654,0-3,1.346-3,3V24H20V3c0-1.654-1.346-3-3-3Zm1,22H6V3c0-.551,.449-1,1-1h10c.551,0,1,.449,1,1V22ZM15,6c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm-3,1c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Zm-3,5c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Zm3-1c.551,0,1,.449,1,1s-.449,1-1,1-1-.449-1-1,.449-1,1-1Zm0,4c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Z"/></svg>
);

TrafficLightGo.displayName = 'TrafficLightGo';
