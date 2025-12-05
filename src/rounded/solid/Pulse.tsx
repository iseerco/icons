import React from 'react';
import type { IconProps } from '../../types';

export const Pulse: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 1h-14a5.006 5.006 0 0 0 -5 5v8a5.006 5.006 0 0 0 5 5h6v2h-4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0 -5-5zm0 10h-2.965l-1.7 2.555a1 1 0 0 1 -.835.445c-.021 0-.042 0-.062 0a1 1 0 0 1 -.833-.551l-2.229-4.461-1.044 1.567a1 1 0 0 1 -.832.445h-3.5a1 1 0 0 1 0-2h2.965l1.7-2.555a.987.987 0 0 1 .897-.445 1 1 0 0 1 .833.551l2.229 4.459 1.044-1.567a1 1 0 0 1 .832-.443h3.5a1 1 0 0 1 0 2z"/></svg>
);

Pulse.displayName = 'Pulse';
