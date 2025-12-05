import React from 'react';
import type { IconProps } from '../../types';

export const RedoAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.318,14.718l4.95-4.95a2.5,2.5,0,0,0,0-3.536l-4.95-4.95L16.9,2.7l4.3,4.3H3.1A3.031,3.031,0,0,0,0,9.95v11.1A3.031,3.031,0,0,0,3.1,24H22V22H3.1A1.034,1.034,0,0,1,2,21.05V9.95A1.034,1.034,0,0,1,3.1,9H21.207l-4.3,4.3Z"/></svg>
);

RedoAlt.displayName = 'RedoAlt';
