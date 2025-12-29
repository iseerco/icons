import React from 'react';
import type { IconProps } from '../../types';

export const BringFront: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14,18h-4c-2.21,0-4-1.79-4-4v-4c0-2.21,1.79-4,4-4h4c2.21,0,4,1.79,4,4v4c0,2.21-1.79,4-4,4ZM4,10c0-3.31,2.69-6,6-6h0c.58,0,1-.56,.84-1.12-.48-1.66-2.02-2.88-3.84-2.88h-3C1.79,0,0,1.79,0,4v3c0,1.82,1.22,3.36,2.88,3.84,.56,.16,1.12-.26,1.12-.84h0Zm16,4c0,3.31-2.69,6-6,6h0c-.58,0-1,.56-.84,1.12,.48,1.66,2.02,2.88,3.84,2.88h3c2.21,0,4-1.79,4-4v-3c0-1.82-1.22-3.36-2.88-3.84-.56-.16-1.12,.26-1.12,.84h0Z"/></svg>
);

BringFront.displayName = 'BringFront';
