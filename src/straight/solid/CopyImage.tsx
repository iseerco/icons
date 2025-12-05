import React from 'react';
import type { IconProps } from '../../types';

export const CopyImage: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,20v2H0V9c0-1.65,1.35-3,3-3v14H19Zm5-15v13H5V5c0-1.65,1.35-3,3-3h13c1.65,0,3,1.35,3,3Zm-16,1.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5Zm14-1.73l-6.11,6.11-3.3-3.3-5.59,5.59v2.83l5.59-5.59,3.3,3.3,6.11-6.11v-2.83Z"/></svg>
);

CopyImage.displayName = 'CopyImage';
