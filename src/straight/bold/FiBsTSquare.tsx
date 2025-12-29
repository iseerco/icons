import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 5s-3.758-.752-6.061-3.558c-.752-.917-1.88-1.442-3.066-1.442h-5.746c-1.186 0-2.314.526-3.066 1.442-2.303 2.806-6.061 3.558-6.061 3.558v3h7v16h10v-16h7zm-14 16v-18h4v2h-2v3h2v2.5h-2v3h2v2.5h-2v3h2v2z"/></svg>
);

FiBsTSquare.displayName = 'FiBsTSquare';
