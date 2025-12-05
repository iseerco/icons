import React from 'react';
import type { IconProps } from '../../types';

export const FiBrCircleQuartersAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm0,3c1.941,0,3.741.618,5.212,1.667l-5.212,5.212-5.212-5.212c1.472-1.049,3.271-1.667,5.212-1.667ZM3,12c0-1.941.618-3.741,1.667-5.212l5.212,5.212-5.212,5.212c-1.049-1.472-1.667-3.271-1.667-5.212Zm9,9c-1.941,0-3.741-.618-5.212-1.667l5.212-5.212,5.212,5.212c-1.472,1.049-3.271,1.667-5.212,1.667Zm7.333-3.788l-5.212-5.212,5.212-5.212c1.049,1.472,1.667,3.271,1.667,5.212s-.618,3.741-1.667,5.212Z"/></svg>
);

FiBrCircleQuartersAlt.displayName = 'FiBrCircleQuartersAlt';
