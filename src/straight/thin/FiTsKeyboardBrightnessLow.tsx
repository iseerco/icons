import React from 'react';
import type { IconProps } from '../../types';

export const FiTsKeyboardBrightnessLow: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,16H7v-1h10v1ZM12,6c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM2,15c0-.55-.45-1-1-1S0,14.45,0,15s.45,1,1,1,1-.45,1-1Zm22,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm-4-6c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm-16,0c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Z"/></svg>
);

FiTsKeyboardBrightnessLow.displayName = 'FiTsKeyboardBrightnessLow';
