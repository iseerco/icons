import React from 'react';
import type { IconProps } from '../../types';

export const Bottle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,17H10V15h4Zm6-5.646V24H4V11.354A2.987,2.987,0,0,1,5.886,8.568L9,7.323V2H8V0h8V2H15V7.323l3.114,1.245A2.988,2.988,0,0,1,20,11.354ZM16,13H8v6h8Z"/></svg>
);

Bottle.displayName = 'Bottle';
