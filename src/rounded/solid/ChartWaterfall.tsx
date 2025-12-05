import React from 'react';
import type { IconProps } from '../../types';

export const ChartWaterfall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,23c0,.55-.45,1-1,1H5c-2.76,0-5-2.24-5-5V1C0,.45,.45,0,1,0s1,.45,1,1V19c0,1.65,1.35,3,3,3H23c.55,0,1,.45,1,1ZM23,0c-.55,0-1,.45-1,1V17c0,.55,.45,1,1,1s1-.45,1-1V1c0-.55-.45-1-1-1Zm-5,11c.55,0,1-.45,1-1V5c0-.55-.45-1-1-1s-1,.45-1,1v5c0,.55,.45,1,1,1Zm-5,4c.55,0,1-.45,1-1v-5c0-.55-.45-1-1-1s-1,.45-1,1v5c0,.55,.45,1,1,1Zm-5,4c.55,0,1-.45,1-1v-5c0-.55-.45-1-1-1s-1,.45-1,1v5c0,.55,.45,1,1,1Z"/></svg>
);

ChartWaterfall.displayName = 'ChartWaterfall';
