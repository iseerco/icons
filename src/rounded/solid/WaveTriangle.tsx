import React from 'react';
import type { IconProps } from '../../types';

export const WaveTriangle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17,22h-.017c-.357-.006-.684-.202-.857-.514L6.967,4.999,1.857,13.515c-.285.474-.899.626-1.372.343-.474-.284-.627-.898-.343-1.372L6.143,2.485c.184-.306.516-.501.874-.485.357.006.684.202.857.514l9.159,16.487,5.109-8.516c.284-.475.897-.627,1.372-.343.474.284.627.898.343,1.372l-6,10c-.181.301-.506.485-.857.485Z"/></svg>
);

WaveTriangle.displayName = 'WaveTriangle';
