import React from 'react';
import type { IconProps } from '../../types';

export const SquareL: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v19Zm-14-5h10v2h-10c-1.103,0-2-.897-2-2V5h2v12Z"/></svg>
);

SquareL.displayName = 'SquareL';
