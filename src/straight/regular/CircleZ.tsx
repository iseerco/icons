import React from 'react';
import type { IconProps } from '../../types';

export const CircleZ: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-2.502-6h7.502v2h-8.361c-.664,0-1.258-.396-1.513-1.011-.254-.614-.115-1.315.355-1.785l7.021-7.204h-7.502v-2h8.361c.664,0,1.258.396,1.513,1.011.254.614.115,1.315-.355,1.785l-7.021,7.204Z"/></svg>
);

CircleZ.displayName = 'CircleZ';
