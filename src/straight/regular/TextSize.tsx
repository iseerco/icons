import React from 'react';
import type { IconProps } from '../../types';

export const TextSize: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,14.5v1.5h-2v-1.5c0-.28-.22-.5-.5-.5h-2.5v9h-2V14h-2.5c-.28,0-.5,.22-.5,.5v1.5h-2v-1.5c0-1.38,1.12-2.5,2.5-2.5h7c1.38,0,2.5,1.12,2.5,2.5ZM15,3c.55,0,1,.45,1,1v2h2v-2c0-1.65-1.35-3-3-3H3C1.35,1,0,2.35,0,4v2H2v-2c0-.55,.45-1,1-1h5V23h2V3h5Z"/></svg>
);

TextSize.displayName = 'TextSize';
