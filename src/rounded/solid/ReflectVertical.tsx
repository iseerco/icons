import React from 'react';
import type { IconProps } from '../../types';

export const ReflectVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,13H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm-9.31-4.75l4.81-5.11c.51-.56,.64-1.33,.33-2.02s-.96-1.12-1.72-1.12H6.88c-.75,0-1.41,.43-1.72,1.12s-.18,1.46,.34,2.03l4.79,5.08c.44,.49,1.06,.76,1.71,.76s1.27-.28,1.69-.75Zm5.15,14.63c.3-.69,.18-1.46-.34-2.03l-4.79-5.08c-.87-.97-2.57-.95-3.4-.02l-4.81,5.11c-.51,.56-.64,1.33-.33,2.02s.96,1.12,1.72,1.12h10.25c.75,0,1.41-.43,1.72-1.12Z"/></svg>
);

ReflectVertical.displayName = 'ReflectVertical';
