import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSortAmountUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.811,4.688L6.561,.438c-.292-.292-.677-.438-1.061-.438s-.769,.146-1.061,.438L.189,4.688l.707,.707L5,1.292V23.999h1V1.292l4.104,4.104,.707-.707Zm13.189,16.312v1H10v-1h14Zm-14-3h11v-1H10v1Zm0-4h8v-1H10v1Zm0-4h5v-1h-5v1Z"/></svg>
);

FiTsSortAmountUp.displayName = 'FiTsSortAmountUp';
