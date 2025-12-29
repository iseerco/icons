import React from 'react';
import type { IconProps } from '../../types';

export const FiBsNfcTrash: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,19H11v3H0V3.5C0,1.57,1.57,0,3.5,0h15c1.93,0,3.5,1.57,3.5,3.5v5.88c-.73-.84-1.8-1.38-3-1.38V3.5c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5v15.5ZM11.62,5H5v12h5v-3h-2v-5.38l3.62-3.62Zm12.38,10h-1v5.5c0,1.93-1.57,3.5-3.5,3.5h-3c-1.93,0-3.5-1.57-3.5-3.5v-5.5h-1v-3h3c0-1.1,.9-2,2-2h2c1.1,0,2,.9,2,2h3v3Zm-4,0h-4v5.5c0,.28,.22,.5,.5,.5h3c.28,0,.5-.22,.5-.5v-5.5Zm-6-5.62c.73-.84,1.8-1.38,3-1.38v-3h-2.55l-3,3h2.55v1.38Z"/></svg>
);

FiBsNfcTrash.displayName = 'FiBsNfcTrash';
