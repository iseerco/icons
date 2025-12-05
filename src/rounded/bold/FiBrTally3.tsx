import React from 'react';
import type { IconProps } from '../../types';

export const FiBrTally3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m3,1.5v21c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5V1.5C0,.671.672,0,1.5,0s1.5.671,1.5,1.5ZM15.5,0c-.828,0-1.5.671-1.5,1.5v21c0,.829.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V1.5c0-.829-.672-1.5-1.5-1.5Zm-7,0c-.828,0-1.5.671-1.5,1.5v21c0,.829.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V1.5c0-.829-.672-1.5-1.5-1.5Z"/></svg>
);

FiBrTally3.displayName = 'FiBrTally3';
