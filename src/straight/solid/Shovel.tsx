import React from 'react';
import type { IconProps } from '../../types';

export const Shovel: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m7.207,18.207l4.179-4.179,3.46,3.46-4.308,4.307c-1.421,1.421-3.311,2.204-5.321,2.204H0v-5.218c0-2.01.783-3.899,2.204-5.321l4.307-4.308,3.46,3.46-4.179,4.179,1.414,1.414ZM18.09.01l-1.414,1.414,2.243,2.243-8.948,8.948,1.414,1.414,8.948-8.948,2.243,2.243,1.414-1.414L18.09.01Z"/>
</svg>
);

Shovel.displayName = 'Shovel';
