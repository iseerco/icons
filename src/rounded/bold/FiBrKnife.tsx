import React from 'react';
import type { IconProps } from '../../types';

export const FiBrKnife: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.363.191a2.72,2.72,0,0,0-3,.686L.4,21.484A1.5,1.5,0,0,0,2.6,23.515l4.09-4.442A17.308,17.308,0,0,0,24,3V2.645A2.583,2.583,0,0,0,22.363.191ZM9.762,15.738l11.2-12.165C20.634,6.277,18.228,14.022,9.762,15.738Z"/></svg>
);

FiBrKnife.displayName = 'FiBrKnife';
