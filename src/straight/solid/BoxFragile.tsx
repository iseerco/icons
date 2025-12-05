import React from 'react';
import type { IconProps } from '../../types';

export const BoxFragile: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm-4,10c0,2.414-1.721,4.434-4,4.899v3.101h2v2h-6v-2h2v-3.101c-2.279-.465-4-2.484-4-4.899V4h4.248l-2.223,5h2.818l-1.276,2.553,1.789,.895,2.724-5.447h-2.977l1.333-3h3.564v6Z"/></svg>
);

BoxFragile.displayName = 'BoxFragile';
