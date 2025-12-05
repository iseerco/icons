import React from 'react';
import type { IconProps } from '../../types';

export const FiTrChessPawn: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.5,23c-3.033,0-5.5-2.468-5.5-5.5v-3.5h2.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-3.898c2.035-1.226,3.398-3.457,3.398-6,0-3.859-3.14-7-7-7S5,3.141,5,7c0,2.543,1.364,4.774,3.398,6h-3.898c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v3.5c0,3.032-2.467,5.5-5.5,5.5-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H22.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM6,7c0-3.309,2.691-6,6-6s6,2.691,6,6-2.691,6-6,6-6-2.691-6-6Zm-1.039,16c1.825-1.152,3.039-3.188,3.039-5.5v-3.5h8v3.5c0,2.312,1.214,4.348,3.039,5.5H4.961Z"/></svg>
);

FiTrChessPawn.displayName = 'FiTrChessPawn';
