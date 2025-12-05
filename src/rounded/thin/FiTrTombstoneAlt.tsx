import React from 'react';
import type { IconProps } from '../../types';

export const FiTrTombstoneAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m23.5,23h-1.5v-13C22,4.486,17.514,0,12,0S2,4.486,2,10v13H.5c-.276,0-.5.224-.5.5s.224.5.5.5h23c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM3,10C3,5.037,7.038,1,12,1s9,4.037,9,9v13H3v-13Z"/></svg>
);

FiTrTombstoneAlt.displayName = 'FiTrTombstoneAlt';
