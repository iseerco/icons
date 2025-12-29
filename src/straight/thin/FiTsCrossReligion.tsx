import React from 'react';
import type { IconProps } from '../../types';

export const FiTsCrossReligion: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,24h-6V13H2v-3.5c0-1.379,1.122-2.5,2.5-2.5h4.5V2.5c0-1.379,1.122-2.5,2.5-2.5h1c1.378,0,2.5,1.121,2.5,2.5V7h4.5c1.378,0,2.5,1.121,2.5,2.5v3.5h-7v11Zm-5-1h4V12h7v-2.5c0-.827-.673-1.5-1.5-1.5h-5.5V2.5c0-.827-.673-1.5-1.5-1.5h-1c-.827,0-1.5,.673-1.5,1.5v5.5H4.5c-.827,0-1.5,.673-1.5,1.5v2.5h7v11Z"/></svg>
);

FiTsCrossReligion.displayName = 'FiTsCrossReligion';
