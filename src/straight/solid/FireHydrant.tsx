import React from 'react';
import type { IconProps } from '../../types';

export const FireHydrant: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m18,8H6c0-2.968,2.166-5.439,5-5.916V0h2v2.084c2.834.477,5,2.948,5,5.916Zm0,8v6h2v2H4v-2h2v-6h-2v-3h2v-3h12v3h2v3h-2Zm-4.5-1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/>
</svg>
);

FireHydrant.displayName = 'FireHydrant';
