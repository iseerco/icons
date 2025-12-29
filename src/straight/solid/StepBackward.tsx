import React from 'react';
import type { IconProps } from '../../types';

export const StepBackward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21-.009L5,10.793V0h-2v24h2v-10.793l16,10.802V-.009Z"/></svg>
);

StepBackward.displayName = 'StepBackward';
