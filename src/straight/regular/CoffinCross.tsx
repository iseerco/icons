import React from 'react';
import type { IconProps } from '../../types';

export const CoffinCross: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18.932,1.885c-.459-1.145-1.552-1.885-2.786-1.885H7.854c-1.234,0-2.327.74-2.786,1.886l-2.608,6.522,3.226,15.592h12.629l3.226-15.592-2.608-6.523Zm-2.246,20.115H7.314l-2.774-13.408,2.386-5.963c.152-.382.518-.629.929-.629h8.291c.411,0,.776.247.929.628l2.386,5.964-2.774,13.408Zm-3.686-13h3v2h-3v5h-2v-5h-3v-2h3v-3h2v3Z"/></svg>
);

CoffinCross.displayName = 'CoffinCross';
