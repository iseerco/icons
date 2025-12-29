import React from 'react';
import type { IconProps } from '../../types';

export const ReflectHorizontal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8.25,10.3L0,2.75V21.25l8.24-7.54c.49-.43,.76-1.06,.76-1.71s-.28-1.28-.76-1.7Zm-1.35,1.93l-4.89,4.48V7.29l4.9,4.49c.09,.08,.1,.17,.1,.22s-.01,.14-.11,.23Zm8.86-1.94c-.49,.44-.76,1.06-.76,1.71s.28,1.27,.76,1.7l8.24,7.54V2.75l-8.24,7.54ZM11,0h2V24h-2V0Z"/></svg>
);

ReflectHorizontal.displayName = 'ReflectHorizontal';
