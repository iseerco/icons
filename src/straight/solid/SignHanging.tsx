import React from 'react';
import type { IconProps } from '../../types';

export const SignHanging: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,2V0H3C1.346,0,0,1.346,0,3V24H2V3c0-.551,.449-1,1-1H7v2c-1.654,0-3,1.346-3,3v13H24V7c0-1.654-1.346-3-3-3V2h3Zm-5,2H9V2h10v2Z"/></svg>
);

SignHanging.displayName = 'SignHanging';
