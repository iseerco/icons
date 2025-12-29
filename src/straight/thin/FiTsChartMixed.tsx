import React from 'react';
import type { IconProps } from '../../types';

export const FiTsChartMixed: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M5,9.21L.15,4.35l.71-.71L5,7.79,12,.79l5,5L22.65,.15l.71,.71-6.35,6.35L12,2.21l-7,7Zm2,4.79h-1v10h1V14Zm-5-2H1v12h1V12Zm10-4h-1V24h1V8Zm5,3h-1v13h1V11Zm5-4h-1V24h1V7Z"/></svg>
);

FiTsChartMixed.displayName = 'FiTsChartMixed';
