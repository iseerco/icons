import React from 'react';
import type { IconProps } from '../../types';

export const FiTrRulerVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.5,0h-3c-1.93,0-3.5,1.57-3.5,3.5V20.5c0,1.93,1.57,3.5,3.5,3.5h3c1.93,0,3.5-1.57,3.5-3.5V3.5c0-1.93-1.57-3.5-3.5-3.5Zm0,23h-3c-1.379,0-2.5-1.121-2.5-2.5V3.5c0-1.379,1.121-2.5,2.5-2.5h3c1.379,0,2.5,1.121,2.5,2.5v.5h-2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v4h-2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v4h-2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v4h-2.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h2.5v.5c0,1.379-1.121,2.5-2.5,2.5Z"/></svg>
);

FiTrRulerVertical.displayName = 'FiTrRulerVertical';
