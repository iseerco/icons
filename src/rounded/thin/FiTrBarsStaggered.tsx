import React from 'react';
import type { IconProps } from '../../types';

export const FiTrBarsStaggered: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,3.5c0-.28,.22-.5,.5-.5H18.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H.5c-.28,0-.5-.22-.5-.5Zm18.5,15.5H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H18.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Zm5-8H5.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H23.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Z"/></svg>
);

FiTrBarsStaggered.displayName = 'FiTrBarsStaggered';
