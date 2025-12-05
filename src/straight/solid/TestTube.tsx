import React from 'react';
import type { IconProps } from '../../types';

export const TestTube: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m7 2h-2v-2h14v2h-2v5h-10zm0 7v10a5 5 0 0 0 10 0v-10z"/></svg>
);

TestTube.displayName = 'TestTube';
