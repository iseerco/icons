import React from 'react';
import type { IconProps } from '../../types';

export const DeleteDocument: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21.414 5h-4.414v-4.414zm.586 2v17h-20v-21a3 3 0 0 1 3-3h10v7zm-8.586 8 2.543-2.543-1.414-1.414-2.543 2.543-2.543-2.543-1.414 1.414 2.543 2.543-2.543 2.543 1.414 1.414 2.543-2.543 2.543 2.543 1.414-1.414z"/></svg>
);

DeleteDocument.displayName = 'DeleteDocument';
