import React from 'react';
import type { IconProps } from '../../types';

export const CrossReligion: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.5,7h-4.5V2.5c0-1.379-1.122-2.5-2.5-2.5h-1c-1.378,0-2.5,1.121-2.5,2.5V7H4.5c-1.378,0-2.5,1.121-2.5,2.5v3.5h7v11h6V13h7v-3.5c0-1.379-1.122-2.5-2.5-2.5Z"/></svg>
);

CrossReligion.displayName = 'CrossReligion';
