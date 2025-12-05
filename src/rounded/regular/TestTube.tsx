import React from 'react';
import type { IconProps } from '../../types';

export const TestTube: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18 0h-12a1 1 0 0 0 0 2h1v17a5 5 0 0 0 10 0v-17h1a1 1 0 0 0 0-2zm-6 22a3 3 0 0 1 -3-3v-10h6v10a3 3 0 0 1 -3 3zm3-15h-6v-5h6z"/></svg>
);

TestTube.displayName = 'TestTube';
