import React from 'react';
import type { IconProps } from '../../types';

export const Syringe: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m22.535 7.324 1.43-1.4-5.75-5.873-1.43 1.4 2.256 2.3-2.179 2.041-.912-.913a3 3 0 0 0 -4.233-.008l3.206 3.206-1.414 1.414-3.209-3.207-1.584 1.586 3.207 3.207-1.414 1.414-3.209-3.207-1.584 1.586 3.207 3.207-1.414 1.414-3.209-3.207-1.3 1.302v6l-2.957 2.957 1.414 1.414 2.957-2.957h6l8.707-8.707a3 3 0 0 0 0-4.243l-.844-.843 2.163-2.023z"/></svg>
);

Syringe.displayName = 'Syringe';
