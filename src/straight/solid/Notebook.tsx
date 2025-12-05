import React from 'react';
import type { IconProps } from '../../types';

export const Notebook: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-19zm-6 15h-6v-2h6zm4-4h-10v-2h10zm0-4h-10v-2h10z"/></svg>
);

Notebook.displayName = 'Notebook';
