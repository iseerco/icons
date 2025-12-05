import React from 'react';
import type { IconProps } from '../../types';

export const Book: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<path d="M426.667,0h-256v384h298.667V42.667C469.333,19.103,450.231,0,426.667,0z"/>
<path d="M106.667,0c-35.346,0-64,28.654-64,64v336.32c11.715-10.528,26.916-16.342,42.667-16.32H128V0H106.667z"/>
<path d="M469.333,512h-384c-23.564,0-42.667-19.102-42.667-42.667l0,0c0-23.564,19.103-42.667,42.667-42.667h384V512z"/>
</svg>
);

Book.displayName = 'Book';
