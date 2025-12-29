import React from 'react';
import type { IconProps } from '../../types';

export const Spoon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.918,1.082c-2.58-2.58-8.743-.04-11.1,2.316a6.2,6.2,0,0,0-.635,8L.294,22.292a1,1,0,1,0,1.414,1.414L12.6,12.816a6.179,6.179,0,0,0,8-.635C22.958,9.824,25.5,3.662,22.918,1.082Z"/></svg>
);

Spoon.displayName = 'Spoon';
