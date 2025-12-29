import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTreeChristmas: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<path d="M288.832,512v-42.667h219.157l-86.037-128.277h53.909l-85.333-127.723h46.933c0,0-99.234-145.073-134.869-191.552  c-0.811-1.058-3.413-4.096-3.413-4.096C288.014,6.338,272.751-0.036,256.832,0l0,0c-15.925-0.047-33.431,6.363-42.347,17.707  L73.301,213.333H121.6l-85.333,128h53.717l-86.059,128h220.907V512H288.832z M155.733,277.333l85.333-128h-42.901l58.581-81.472  l57.344,81.472h-43.285l85.333,127.723h-54.187l86.037,128.277H124.075l86.059-128H155.733z"/>
<circle cx="245.333" cy="352" r="32"/>
<circle cx="266.667" cy="245.333" r="32"/>
</svg>
);

FiBsTreeChristmas.displayName = 'FiBsTreeChristmas';
