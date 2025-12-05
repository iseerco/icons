import React from 'react';
import type { IconProps } from '../../types';

export const Blender: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m19.152,17.169L22.007,0H5C2.794,0,1,1.794,1,4v7c0,2.206,1.794,4,4,4h1v2.127c-1.723.445-3,2.013-3,3.873v3h19v-3c0-1.805-1.202-3.335-2.848-3.831Zm-14.152-4.169c-1.103,0-2-.897-2-2v-7c0-1.103.897-2,2-2h1v11h-1Zm3,0v-2h3v-2h-3v-2h3v-2h-3v-3h11.647l-2.495,15h-9.152v-2h3v-2h-3Zm12,9H5v-1c0-1.103.897-2,2-2h11c1.103,0,2,.897,2,2v1Z"/>
</svg>
);

Blender.displayName = 'Blender';
