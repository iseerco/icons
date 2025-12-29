import React from 'react';
import type { IconProps } from '../../types';

export const Skateboard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21.835 2.165a7.389 7.389 0 0 0 -10.451 0l-9.219 9.219a7.39 7.39 0 1 0 10.451 10.451l9.219-9.219a7.389 7.389 0 0 0 0-10.451zm-9.128 14.542-3 3a1 1 0 0 1 -1.414-1.414l.793-.793-2.586-2.586-.793.793a1 1 0 0 1 -1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 1.414zm7-7-3 3a1 1 0 0 1 -1.414-1.414l.793-.793-2.586-2.586-.793.793a1 1 0 0 1 -1.414-1.414l3-3a1 1 0 1 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 1.414z"/></svg>
);

Skateboard.displayName = 'Skateboard';
