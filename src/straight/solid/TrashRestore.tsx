import React from 'react';
import type { IconProps } from '../../types';

export const TrashRestore: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17,4v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H1v2h1.643l1.704,15.331c.169,1.521,1.45,2.669,2.981,2.669h9.305c1.53,0,2.812-1.147,2.982-2.669l1.703-15.331h1.682v-2h-6Zm-8-2h6v2h-6v-2Zm6.291,12.294l-2.291-2.291v5.997h-2v-6.008l-2.291,2.302-1.414-1.414,3.299-3.299c.776-.775,2.037-.772,2.812,0l3.3,3.3-1.414,1.414Z"/></svg>
);

TrashRestore.displayName = 'TrashRestore';
