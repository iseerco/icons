import React from 'react';
import type { IconProps } from '../../types';

export const ClockTen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm.5,10.866c.31-.179,.5-.509,.5-.866V6c0-.553-.448-1-1-1s-1,.447-1,1v4.268l-1.964-1.134c-.478-.277-1.09-.112-1.366,.366s-.112,1.09,.366,1.366l3.464,2c.155,.089,.327,.134,.5,.134s.345-.045,.5-.134Z"/></svg>
);

ClockTen.displayName = 'ClockTen';
