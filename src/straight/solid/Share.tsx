import React from 'react';
import type { IconProps } from '../../types';

export const Share: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.333,14.667A4.664,4.664,0,0,0,15.49,16.69l-6.5-2.935A4.665,4.665,0,0,0,9,10.261l6.494-2.949a4.665,4.665,0,1,0-.824-2.645,4.712,4.712,0,0,0,.067.792L7.846,8.587a4.667,4.667,0,1,0-.014,6.839l6.9,3.117a4.667,4.667,0,1,0,4.6-3.876Z"/></svg>
);

Share.displayName = 'Share';
