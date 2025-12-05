import React from 'react';
import type { IconProps } from '../../types';

export const Slash: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,24c-.26,0-.51-.1-.71-.29L.29,1.71C-.1,1.32-.1,.68,.29,.29S1.32-.1,1.71,.29L23.71,22.29c.39,.39,.39,1.02,0,1.41-.2,.2-.45,.29-.71,.29Z"/></svg>
);

Slash.displayName = 'Slash';
