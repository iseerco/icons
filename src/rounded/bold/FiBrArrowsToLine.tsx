import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowsToLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,12c0,.828-.671,1.5-1.5,1.5H1.5c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5H22.5c.829,0,1.5,.672,1.5,1.5Zm-11.293,3.293c-.391-.391-1.024-.391-1.414,0l-3.163,3c-.63,.63-.184,1.707,.707,1.707h1.663v2.5c0,.828,.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-2.5h1.663c.891,0,1.337-1.077,.707-1.707l-3.163-3Zm-1.414-6.586c.391,.391,1.024,.391,1.414,0l3.163-3c.63-.63,.184-1.707-.707-1.707h-1.663V1.5c0-.828-.671-1.5-1.5-1.5s-1.5,.672-1.5,1.5v2.5h-1.663c-.891,0-1.337,1.077-.707,1.707l3.163,3Z"/></svg>
);

FiBrArrowsToLine.displayName = 'FiBrArrowsToLine';
