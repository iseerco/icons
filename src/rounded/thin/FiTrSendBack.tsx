import React from 'react';
import type { IconProps } from '../../types';

export const FiTrSendBack: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,13h-2.5v-3.5c0-1.93-1.57-3.5-3.5-3.5h-3.5v-2.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5v4c0,1.93,1.57,3.5,3.5,3.5h2.5v3.5c0,1.93,1.57,3.5,3.5,3.5h3.5v2.5c0,1.93,1.57,3.5,3.5,3.5h4c1.93,0,3.5-1.57,3.5-3.5v-4c0-1.93-1.57-3.5-3.5-3.5ZM1,7.5V3.5c0-1.379,1.122-2.5,2.5-2.5h4c1.378,0,2.5,1.121,2.5,2.5v4c0,1.379-1.122,2.5-2.5,2.5H3.5c-1.378,0-2.5-1.121-2.5-2.5Zm8.5,9.5c-1.378,0-2.5-1.121-2.5-2.5v-3.5h.5c1.93,0,3.5-1.57,3.5-3.5v-.5h3.5c1.378,0,2.5,1.121,2.5,2.5v3.5h-.5c-1.93,0-3.5,1.57-3.5,3.5v.5h-3.5Zm13.5,3.5c0,1.379-1.122,2.5-2.5,2.5h-4c-1.378,0-2.5-1.121-2.5-2.5v-4c0-1.379,1.122-2.5,2.5-2.5h4c1.378,0,2.5,1.121,2.5,2.5v4Z"/></svg>
);

FiTrSendBack.displayName = 'FiTrSendBack';
