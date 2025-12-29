import React from 'react';
import type { IconProps } from '../../types';

export const Clipboard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18,2h-2.171c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2h-2.171c-1.654,0-3,1.346-3,3v19h18V5c0-1.654-1.346-3-3-3Zm-7,0h2c.552,0,1,.449,1,1s-.448,1-1,1h-2c-.552,0-1-.449-1-1s.448-1,1-1Zm8,20H5V5c0-.551.448-1,1-1h2.172c.413,1.164,1.524,2,2.828,2h2c1.304,0,2.415-.836,2.828-2h2.172c.552,0,1,.449,1,1v17Z"/></svg>
);

Clipboard.displayName = 'Clipboard';
