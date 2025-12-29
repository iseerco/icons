import React from 'react';
import type { IconProps } from '../../types';

export const FileAudio: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21.414,5h-4.414V.586l4.414,4.414Zm.586,2v17H2V3c0-1.657,1.343-3,3-3h10v7h7Zm-9,4.436l-3.886,2.564h-2.114v4h2.114l3.886,2.561v-9.125Zm4,4.564c0-1.105-.895-2-2-2v4c1.105,0,2-.895,2-2Z"/></svg>
);

FileAudio.displayName = 'FileAudio';
