import React from 'react';
import type { IconProps } from '../../types';

export const Monument: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,23c0,.552-.448,1-1,1H1c-.552,0-1-.448-1-1s.448-1,1-1H23c.552,0,1,.448,1,1ZM17.378,5c-.182-.996-.65-1.928-1.368-2.646l-1.183-1.182c-1.511-1.512-4.146-1.512-5.656,0l-1.183,1.182c-.718,.718-1.186,1.65-1.368,2.646h10.757Zm3.622,13h-2.065l-1.294-11h-4.64v10c0,.552-.448,1-1,1s-1-.448-1-1V7H6.36l-1.294,11H3c-.552,0-1,.448-1,1s.448,1,1,1H21c.552,0,1-.448,1-1s-.448-1-1-1Z"/></svg>
);

Monument.displayName = 'Monument';
