import React from 'react';
import type { IconProps } from '../../types';

export const CaravanAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M9,11H4V8H9ZM7.5,17a3.5,3.5,0,0,0,0,7A3.5,3.5,0,0,0,7.5,17ZM18,11V8H15v3Zm6,8v2H12.968c.386-7.931-11.311-7.933-10.943,0H0V3A3,3,0,0,1,3,0H19a3,3,0,0,1,3,3V19ZM11,6H2v7h9Zm9,0H13v7h7Z"/></svg>
);

CaravanAlt.displayName = 'CaravanAlt';
