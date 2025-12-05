import React from 'react';
import type { IconProps } from '../../types';

export const Paragraph: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m23,0h-14.5C3.813,0,0,3.813,0,8.5s3.813,8.5,8.5,8.5h5.5v6c0,.553.448,1,1,1s1-.447,1-1V2h3v21c0,.553.448,1,1,1s1-.447,1-1V2h2c.552,0,1-.447,1-1s-.448-1-1-1Z"/></svg>
);

Paragraph.displayName = 'Paragraph';
