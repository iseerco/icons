import React from 'react';
import type { IconProps } from '../../types';

export const FiTsAngleUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m23.181,17.974L12.354,7.146c-.189-.189-.518-.189-.707,0L.819,17.974l-.707-.707L10.939,6.439c.566-.566,1.555-.566,2.121,0l10.827,10.827-.707.707Z"/>
</svg>
);

FiTsAngleUp.displayName = 'FiTsAngleUp';
