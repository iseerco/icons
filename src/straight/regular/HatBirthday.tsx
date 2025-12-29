import React from 'react';
import type { IconProps } from '../../types';

export const HatBirthday: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.7,24,13.475,5.6a3,3,0,1,0-2.95,0L.3,24ZM10.4,22H8.235l6.036-10.853,1.138,2.047Zm6.143-6.76,1.135,2.044L14.986,22H12.7ZM5.946,22H3.7L12,7.059l1.127,2.029Zm11.343,0,1.527-2.673L20.3,22Z"/></svg>
);

HatBirthday.displayName = 'HatBirthday';
