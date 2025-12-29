import React from 'react';
import type { IconProps } from '../../types';

export const KeyboardBrightnessLow: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,17H8c-.55,0-1-.45-1-1s.45-1,1-1h8c.55,0,1,.45,1,1s-.45,1-1,1ZM12,7c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5ZM3,15.5c0-.83-.67-1.5-1.5-1.5S0,14.67,0,15.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm21,0c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm-4.5-5.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm-15,0c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Z"/></svg>
);

KeyboardBrightnessLow.displayName = 'KeyboardBrightnessLow';
