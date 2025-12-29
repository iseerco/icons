import React from 'react';
import type { IconProps } from '../../types';

export const Password: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m15 17a1 1 0 0 1 -1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm-.293-9.707a1 1 0 0 0 -1.414 0l-1.293 1.293-1.293-1.293a1 1 0 1 0 -1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 0 0 1.414-1.414l-1.293-1.293 1.293-1.293a1 1 0 0 0 0-1.414zm7.293 8.707h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-.586-6 1.293-1.293a1 1 0 1 0 -1.414-1.414l-1.293 1.293-1.293-1.293a1 1 0 1 0 -1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 0 0 1.414-1.414zm-15.414 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm.707-8.707a1 1 0 0 0 -1.414 0l-1.293 1.293-1.293-1.293a1 1 0 1 0 -1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 1 0 1.414-1.414l-1.293-1.293 1.293-1.293a1 1 0 0 0 0-1.414z"/></svg>
);

Password.displayName = 'Password';
