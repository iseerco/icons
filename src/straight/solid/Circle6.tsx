import React from 'react';
import type { IconProps } from '../../types';

export const Circle6: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,18c-2.206,0-4-1.794-4-4v-3c0-2.757,2.243-5,5-5h2v2h-2c-1.494,0-2.725,1.1-2.953,2.531,.58-.328,1.24-.531,1.953-.531,2.206,0,4,1.794,4,4s-1.794,4-4,4Zm0-2c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/></svg>
);

Circle6.displayName = 'Circle6';
