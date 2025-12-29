import React from 'react';
import type { IconProps } from '../../types';

export const ClockSix: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,16c0,.553-.447,1-1,1s-1-.447-1-1V6c0-.552,.447-1,1-1s1,.448,1,1v10Z"/></svg>
);

ClockSix.displayName = 'ClockSix';
