import React from 'react';
import type { IconProps } from '../../types';

export const Castle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,9c-.552,0-1,.447-1,1v2H2v-2c0-.553-.448-1-1-1s-1,.447-1,1v9.5c0,2.481,2.019,4.5,4.5,4.5h3.5c.552,0,1-.447,1-1v-4c0-1.654,1.346-3,3-3s3,1.346,3,3v4c0,.553,.448,1,1,1h3.5c2.481,0,4.5-2.019,4.5-4.5V10c0-.553-.448-1-1-1Zm-18,1V1c0-.553,.448-1,1-1s1,.447,1,1v1h2V1c0-.553,.448-1,1-1s1,.447,1,1v1h2V1c0-.553,.448-1,1-1s1,.447,1,1v1h2V1c0-.553,.448-1,1-1s1,.447,1,1V10h-5v-3c0-1.105-.895-2-2-2s-2,.895-2,2v3H5Z"/></svg>
);

Castle.displayName = 'Castle';
