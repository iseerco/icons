import React from 'react';
import type { IconProps } from '../../types';

export const Barcode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M1,22c-.553,0-1-.448-1-1V3c0-.552,.447-1,1-1s1,.448,1,1V21c0,.552-.447,1-1,1Zm5-1V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm15,0V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm-8,0V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Zm-3-.5V3.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V20.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5Zm8,0V3.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V20.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5Zm6,.5V3c0-.552-.447-1-1-1s-1,.448-1,1V21c0,.552,.447,1,1,1s1-.448,1-1Z"/></svg>
);

Barcode.displayName = 'Barcode';
