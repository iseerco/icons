import React from 'react';
import type { IconProps } from '../../types';

export const DiceD4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.419,1.226a3,3,0,0,0-4.838,0L0,15.236l12,8.751,12-8.751Zm6.833,13.538L13,20.783V2.693ZM11,2.692V20.783L2.748,14.764Z"/></svg>
);

DiceD4.displayName = 'DiceD4';
