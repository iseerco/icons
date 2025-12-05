import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBangladeshiTakaSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,11.5v2c0,5.79-4.71,10.5-10.5,10.5h-3c-1.93,0-3.5-1.57-3.5-3.5V11H2v-3h3V3.5c0-.28-.22-.5-.5-.5H2V0h2.5c1.93,0,3.5,1.57,3.5,3.5v4.5h3v3h-3v9.5c0,.28,.22,.5,.5,.5h3c4.14,0,7.5-3.36,7.5-7.5v-2c0-.28-.22-.5-.5-.5h-3.5v-3h3.5c1.93,0,3.5,1.57,3.5,3.5Z"/></svg>
);

FiBsBangladeshiTakaSign.displayName = 'FiBsBangladeshiTakaSign';
