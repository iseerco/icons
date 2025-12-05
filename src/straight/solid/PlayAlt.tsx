import React from 'react';
import type { IconProps } from '../../types';

export const PlayAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m13.984 12-3.984 2.277v-4.554zm10.016-9v21h-24v-21a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zm-5.984 9-10.016-5.723v11.446z"/></svg>
);

PlayAlt.displayName = 'PlayAlt';
