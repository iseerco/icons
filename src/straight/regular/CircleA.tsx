import React from 'react';
import type { IconProps } from '../../types';

export const CircleA: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm0-16.5c-1.077,0-1.922.29-2.542,1.701l-3.374,10.049h2.126l.943-3h5.691l.945,3h2.127l-3.39-10.092c-.604-1.368-1.449-1.658-2.526-1.658Zm-2.218,6.75l1.295-4.119c.194-.408.542-.625.917-.631.388.005.736.223.9.555l1.321,4.195h-4.433Z"/></svg>
);

CircleA.displayName = 'CircleA';
