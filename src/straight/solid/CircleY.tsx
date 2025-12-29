import React from 'react';
import type { IconProps } from '../../types';

export const CircleY: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,13.045v4.955h-2v-4.955l-5-6.795h2.482l3.518,4.771,3.518-4.771h2.482l-5,6.795Z"/></svg>
);

CircleY.displayName = 'CircleY';
