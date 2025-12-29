import React from 'react';
import type { IconProps } from '../../types';

export const ChartCandlestick: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,23c0,.55-.45,1-1,1H5c-2.76,0-5-2.24-5-5V1C0,.45,.45,0,1,0s1,.45,1,1V19c0,1.65,1.35,3,3,3H23c.55,0,1,.45,1,1ZM15,11V5c0-1.1,.9-2,2-2V1c0-.55,.45-1,1-1s1,.45,1,1V3c1.1,0,2,.9,2,2v6c0,1.1-.9,2-2,2v2c0,.55-.45,1-1,1s-1-.45-1-1v-2c-1.1,0-2-.9-2-2Zm-9,3V5c0-1.1,.9-2,2-2V1c0-.55,.45-1,1-1s1,.45,1,1V3c1.1,0,2,.9,2,2V14c0,1.1-.9,2-2,2v2c0,.55-.45,1-1,1s-1-.45-1-1v-2c-1.1,0-2-.9-2-2Z"/></svg>
);

ChartCandlestick.displayName = 'ChartCandlestick';
