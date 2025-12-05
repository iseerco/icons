import React from 'react';
import type { IconProps } from '../../types';

export const ArrowsAltV: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.913,19.35l-4.361,4.418c-.305,.309-.799,.309-1.104,0l-4.361-4.418c-.492-.498-.143-1.35,.552-1.35h3.361V6h-3.361c-.695,0-1.044-.852-.552-1.35L11.448,.232c.305-.309,.799-.309,1.104,0l4.361,4.418c.492,.498,.143,1.35-.552,1.35h-3.361v12h3.361c.695,0,1.044,.852,.552,1.35Z"/></svg>
);

ArrowsAltV.displayName = 'ArrowsAltV';
