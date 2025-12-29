import React from 'react';
import type { IconProps } from '../../types';

export const Album: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V3C0,1.35,1.35,0,3,0H21c1.65,0,3,1.35,3,3V24ZM2,22H22V3c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1V22Zm10-2c-4.41,0-8-3.59-8-8S7.59,4,12,4s8,3.59,8,8-3.59,8-8,8Zm0-14c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Zm0,7.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Z"/></svg>
);

Album.displayName = 'Album';
