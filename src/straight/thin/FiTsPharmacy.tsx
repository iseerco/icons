import React from 'react';
import type { IconProps } from '../../types';

export const FiTsPharmacy: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m16,24h-8v-8H0v-5.5c0-1.378,1.122-2.5,2.5-2.5h5.5V2.5c0-1.378,1.122-2.5,2.5-2.5h3c1.378,0,2.5,1.122,2.5,2.5v5.5h5.5c1.378,0,2.5,1.122,2.5,2.5v5.5h-8v8Zm-7-1h6v-8h8v-4.5c0-.827-.673-1.5-1.5-1.5h-6.5V2.5c0-.827-.673-1.5-1.5-1.5h-3c-.827,0-1.5.673-1.5,1.5v6.5H2.5c-.827,0-1.5.673-1.5,1.5v4.5h8v8Z"/>
</svg>
);

FiTsPharmacy.displayName = 'FiTsPharmacy';
