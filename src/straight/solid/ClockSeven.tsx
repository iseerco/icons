import React from 'react';
import type { IconProps } from '../../types';

export const ClockSeven: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm1-11.728V5h-2v6.728l-2.396,4.075,1.724,1.014,2.673-4.544Z"/></svg>
);

ClockSeven.displayName = 'ClockSeven';
