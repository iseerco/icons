import React from 'react';
import type { IconProps } from '../../types';

export const CategoryAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v19ZM4,11h7v-7h-7v7Zm2-5h3v3h-3v-3Zm7,5h7v-7h-7v7Zm2-5h3v3h-3v-3Zm-11,14h7v-7h-7v7Zm2-5h3v3h-3v-3Zm7,5h7v-7h-7v7Zm2-5h3v3h-3v-3Z"/>
</svg>
);

CategoryAlt.displayName = 'CategoryAlt';
