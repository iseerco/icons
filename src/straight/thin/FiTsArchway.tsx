import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArchway: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,2.651V1H0v1.651l2,3V22H0v1H7v-7c0-2.757,2.243-5,5-5s5,2.243,5,5v7h7v-1h-2V5.651l2-3ZM1,2H23v.349l-1.768,2.651H2.768L1,2.349v-.349ZM18,22v-6c0-3.309-2.691-6-6-6s-6,2.691-6,6v6H3V6H21V22h-3Z"/></svg>
);

FiTsArchway.displayName = 'FiTsArchway';
