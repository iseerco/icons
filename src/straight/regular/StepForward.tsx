import React from 'react';
import type { IconProps } from '../../types';

export const StepForward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,0v10.793L3-.009v24.018l16-10.802v10.793h2V0h-2ZM5,20.245V3.755l12.213,8.245-12.213,8.245Z"/></svg>
);

StepForward.displayName = 'StepForward';
