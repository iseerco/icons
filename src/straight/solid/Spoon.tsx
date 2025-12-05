import React from 'react';
import type { IconProps } from '../../types';

export const Spoon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.919,1.081c-2.58-2.58-8.744-.04-11.1,2.316a6.206,6.206,0,0,0-.635,8L.043,22.543l1.414,1.414L12.6,12.816a6.174,6.174,0,0,0,8.005-.635C22.959,9.824,25.5,3.661,22.919,1.081Z"/></svg>
);

Spoon.displayName = 'Spoon';
