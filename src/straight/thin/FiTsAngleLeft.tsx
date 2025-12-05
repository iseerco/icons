import React from 'react';
import type { IconProps } from '../../types';

export const FiTsAngleLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m17.267,23.888L6.439,13.061c-.283-.283-.439-.66-.439-1.061s.156-.777.439-1.061L17.267.112l.707.707L7.146,11.646c-.094.095-.146.22-.146.354s.052.259.146.354l10.827,10.827-.707.707Z"/>
</svg>
);

FiTsAngleLeft.displayName = 'FiTsAngleLeft';
