import React from 'react';
import type { IconProps } from '../../types';

export const FileVideo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,14h5v4h-5v-4ZM17,.586V5h4.414L17,.586Zm5,6.414V24H2V3C2,1.343,3.343,0,5,0H15V7h7Zm-4,5l-3,2.25v-2.25H6v8H15v-2.25l3,2.25V12Z"/></svg>
);

FileVideo.displayName = 'FileVideo';
