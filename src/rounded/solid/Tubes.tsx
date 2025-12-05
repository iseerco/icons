import React from 'react';
import type { IconProps } from '../../types';

export const Tubes: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m13,1c0-.553.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1v7h-8V2c-.552,0-1-.447-1-1Zm1,10v9c0,2.206,1.794,4,4,4s4-1.794,4-4v-9h-8ZM2,2v7h8V2c.552,0,1-.447,1-1s-.448-1-1-1H2c-.552,0-1,.447-1,1s.448,1,1,1Zm0,9v9c0,2.206,1.794,4,4,4s4-1.794,4-4v-9H2Z"/></svg>
);

Tubes.displayName = 'Tubes';
