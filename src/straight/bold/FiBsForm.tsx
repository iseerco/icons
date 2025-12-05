import React from 'react';
import type { IconProps } from '../../types';

export const FiBsForm: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m20.682 3.561-2.243-2.244a4.477 4.477 0 0 0 -3.182-1.317h-9.757a3.5 3.5 0 0 0 -3.5 3.5v20.5h20v-17.258a4.525 4.525 0 0 0 -1.318-3.181zm-15.682 17.439v-17.5a.5.5 0 0 1 .5-.5h9.5v4h4v14zm3-5h8v3h-8zm0-7h8v5h-8z"/></svg>
);

FiBsForm.displayName = 'FiBsForm';
