import React from 'react';
import type { IconProps } from '../../types';

export const LightSwitchOff: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,0H5c-1.654,0-3,1.346-3,3V24H22V3c0-1.654-1.346-3-3-3Zm1,22H4V3c0-.551,.449-1,1-1h14c.551,0,1,.449,1,1V22ZM15,4h-6c-1.103,0-2,.897-2,2v14h10V6c0-1.103-.897-2-2-2Zm0,4v3h-6v-3h6Zm-6,10v-5h6v5h-6Z"/></svg>
);

LightSwitchOff.displayName = 'LightSwitchOff';
