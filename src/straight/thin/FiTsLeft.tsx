import React from 'react';
import type { IconProps } from '../../types';

export const FiTsLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,23.67L.77,13.84c-.5-.5-.77-1.15-.77-1.84,0-.69,.27-1.34,.76-1.83h0S11,.33,11,.33V7h13v10H11v6.67ZM1.47,10.88c-.3,.3-.47,.7-.47,1.12,0,.43,.17,.83,.47,1.13l8.53,8.2v-5.33h13V8H10V2.67L1.47,10.88Z"/></svg>
);

FiTsLeft.displayName = 'FiTsLeft';
