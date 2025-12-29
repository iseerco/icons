import React from 'react';
import type { IconProps } from '../../types';

export const Piano: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m-.048,15v-6.352C-.048,3.879,3.847,0,8.633,0c4.004,0,7.403,2.72,8.268,6.614l.231,1.042c.238,1.072,1.177,1.821,2.282,1.821,2.555,0,4.634,2.072,4.634,4.618v.905H-.048Zm19.048,2v3h-2v-3h-2v3h-2v-3h-2v3h-2v-3h-2v3h-2v-3H-.048v7h24.096v-7h-5.048Z"/>
</svg>
);

Piano.displayName = 'Piano';
