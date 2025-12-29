import React from 'react';
import type { IconProps } from '../../types';

export const ChartBullet: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2h-4V0h-2V2H3C1.35,2,0,3.35,0,5v2c0,1.65,1.35,3,3,3H15v2h2v-2h4c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3ZM2,7v-2c0-.55,.45-1,1-1h7v4H3c-.55,0-1-.45-1-1Zm10,1V4h3v4h-3Zm10-1c0,.55-.45,1-1,1h-4V4h4c.55,0,1,.45,1,1v2Zm-1,7H12v-2h-2v2H3c-1.65,0-3,1.35-3,3v2c0,1.65,1.35,3,3,3h7v2h2v-2h9c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3ZM2,19v-2c0-.55,.45-1,1-1h2v4H3c-.55,0-1-.45-1-1Zm5,1v-4h3v4h-3Zm15-1c0,.55-.45,1-1,1H12v-4h9c.55,0,1,.45,1,1v2Z"/></svg>
);

ChartBullet.displayName = 'ChartBullet';
