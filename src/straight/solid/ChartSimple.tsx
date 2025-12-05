import React from 'react';
import type { IconProps } from '../../types';

export const ChartSimple: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,24h-6V2c0-1.1,.9-2,2-2h2c1.1,0,2,.9,2,2V24Zm9,0h-6V8c0-1.1,.9-2,2-2h2c1.1,0,2,.9,2,2V24Zm-18,0H0V14c0-1.1,.9-2,2-2h2c1.1,0,2,.9,2,2v10Z"/></svg>
);

ChartSimple.displayName = 'ChartSimple';
