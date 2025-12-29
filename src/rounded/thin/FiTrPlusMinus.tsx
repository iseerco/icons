import React from 'react';
import type { IconProps } from '../../types';

export const FiTrPlusMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m3,9c0-.276.224-.5.5-.5h8V.5c0-.276.224-.5.5-.5s.5.224.5.5v8h8c.276,0,.5.224.5.5s-.224.5-.5.5h-8v8c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-8H3.5c-.276,0-.5-.224-.5-.5Zm17.5,14H3.5c-.276,0-.5.224-.5.5s.224.5.5.5h17c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Z"/></svg>
);

FiTrPlusMinus.displayName = 'FiTrPlusMinus';
