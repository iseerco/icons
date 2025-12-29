import React from 'react';
import type { IconProps } from '../../types';

export const Bottle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10,15h4v2H10Zm10-2.292V19a5.006,5.006,0,0,1-5,5H9a5.006,5.006,0,0,1-5-5V12.708A4.976,4.976,0,0,1,7.144,8.065L9,7.323V2A1,1,0,0,1,9,0h6a1,1,0,0,1,0,2V7.323l1.856.742A4.977,4.977,0,0,1,20,12.708ZM16,14a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1Z"/></svg>
);

Bottle.displayName = 'Bottle';
