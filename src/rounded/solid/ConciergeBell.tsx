import React from 'react';
import type { IconProps } from '../../types';

export const ConciergeBell: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,21H13v-2h7.343c1.465,0,2.657-1.192,2.657-2.657,0-5.88-4.371-10.79-10-11.298V3h1c.552,0,1-.448,1-1s-.448-1-1-1h-4c-.552,0-1,.448-1,1s.448,1,1,1h1v2.044C5.371,5.553,1,10.462,1,16.343c0,1.465,1.192,2.657,2.657,2.657h7.343v2H1c-.552,0-1,.448-1,1s.448,1,1,1H23c.552,0,1-.448,1-1s-.448-1-1-1Z"/></svg>
);

ConciergeBell.displayName = 'ConciergeBell';
