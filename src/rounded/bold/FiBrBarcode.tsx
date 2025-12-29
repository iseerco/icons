import React from 'react';
import type { IconProps } from '../../types';

export const FiBrBarcode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M1.5,22c-.828,0-1.5-.671-1.5-1.5V3.5c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5V20.5c0,.829-.672,1.5-1.5,1.5Zm11.5-1.5V3.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V20.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5Zm-4-.5V4c0-1.104-.896-2-2-2s-2,.896-2,2V20c0,1.104,.896,2,2,2s2-.896,2-2Zm10,0V4c0-1.104-.896-2-2-2s-2,.896-2,2V20c0,1.104,.896,2,2,2s2-.896,2-2Zm5,.5V3.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V20.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5Z"/></svg>
);

FiBrBarcode.displayName = 'FiBrBarcode';
