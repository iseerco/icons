import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRedoAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.167,15.356l4.95-4.949a3,3,0,0,0,0-4.243l-4.95-4.949L16.046,3.336,19.71,7H3.5A3.5,3.5,0,0,0,0,10.5v10A3.5,3.5,0,0,0,3.5,24H22V21H3.5a.5.5,0,0,1-.5-.5v-10a.5.5,0,0,1,.5-.5H19.282l-3.236,3.235Z"/></svg>
);

FiBsRedoAlt.displayName = 'FiBsRedoAlt';
