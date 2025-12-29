import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAuditAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m14,6v3H6v-3h8Zm9,9.449v5.551c0,1.657-1.343,3-3,3H1V0h17c1.657,0,3,1.343,3,3v8.619l2,3.83Zm-7,5.551V3H4v18h12Z"/>
</svg>
);

FiBsAuditAlt.displayName = 'FiBsAuditAlt';
