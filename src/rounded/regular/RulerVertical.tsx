import React from 'react';
import type { IconProps } from '../../types';

export const RulerVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,0h-2c-2.206,0-4,1.794-4,4V20c0,2.206,1.794,4,4,4h2c2.206,0,4-1.794,4-4V4c0-2.206-1.794-4-4-4Zm0,22h-2c-1.103,0-2-.897-2-2V4c0-1.103,.897-2,2-2h2c1.103,0,2,.897,2,2v1h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v1c0,1.103-.897,2-2,2Z"/></svg>
);

RulerVertical.displayName = 'RulerVertical';
