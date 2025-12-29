import React from 'react';
import type { IconProps } from '../../types';

export const DiceD4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,24a5,5,0,0,1-1.627-.637L1.707,18.521a4,4,0,0,1-1-5.541L8.845,1.406A4.045,4.045,0,0,1,11,0ZM23.287,12.967,15.155,1.406,15.12,1.36A3.977,3.977,0,0,0,13,0V24a5.011,5.011,0,0,0,1.627-.637l7.73-4.885A3.984,3.984,0,0,0,23.287,12.967Z"/></svg>
);

DiceD4.displayName = 'DiceD4';
