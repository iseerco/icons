import React from 'react';
import type { IconProps } from '../../types';

export const FiBsWhistle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,13a3,3,0,1,1-3,3A3,3,0,0,1,8,13ZM24,8v6.481l-7.589,1.284a.474.474,0,0,0-.413.4,7.829,7.829,0,0,1-.625,2.883A8.057,8.057,0,0,1,9.283,23.9a8.1,8.1,0,0,1-1.276.1,8,8,0,0,1-7.99-8.527A8.143,8.143,0,0,1,8.242,8Zm-3,3H8.242a5.139,5.139,0,0,0-5.231,4.665,4.985,4.985,0,0,0,9.6,2.216A4.778,4.778,0,0,0,13,16.1a3.453,3.453,0,0,1,2.912-3.292L21,11.946ZM11,0H8V5h3Zm5.813,2.225L14.187.775,11.771,5.152,14.4,6.6ZM7.229,5.152,4.813.775,2.187,2.225,4.6,6.6Z"/></svg>
);

FiBsWhistle.displayName = 'FiBsWhistle';
