import React from 'react';
import type { IconProps } from '../../types';

export const TruckFlatbed: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m7.942,20c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5h4.885Zm9.115,0c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5h-4.885Zm3.663-10l-1.316-3.949c-.409-1.227-1.553-2.051-2.846-2.051h-3.559v6h7.72Zm.28,2h-8v4H0v2h24v-3c0-1.654-1.346-3-3-3Z"/>
</svg>
);

TruckFlatbed.displayName = 'TruckFlatbed';
