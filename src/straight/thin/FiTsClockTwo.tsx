import React from 'react';
import type { IconProps } from '../../types';

export const FiTsClockTwo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0c6.617,0,12,5.383,12,12s-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0Zm0,23c6.065,0,11-4.935,11-11S18.065,1,12,1,1,5.935,1,12s4.935,11,11,11Zm-1-9.632l5.336-3.093-.502-.865-3.834,2.223V5h-1V13.368Z"/></svg>
);

FiTsClockTwo.displayName = 'FiTsClockTwo';
