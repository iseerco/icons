import React from 'react';
import type { IconProps } from '../../types';

export const FiTsFaceEyesXmarks: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.854,7.854l-2.146,2.146,2.146,2.146-.707,.707-2.146-2.146-2.146,2.146-.707-.707,2.146-2.146-2.146-2.146,.707-.707,2.146,2.146,2.146-2.146,.707,.707Zm-8.707,5l.707-.707-2.146-2.146,2.146-2.146-.707-.707-2.146,2.146-2.146-2.146-.707,.707,2.146,2.146-2.146,2.146,.707,.707,2.146-2.146,2.146,2.146Zm13.854-.854c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Zm-7.5,6.5v.5h-7v-.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5Zm-1.05-.5c-.232-1.14-1.242-2-2.45-2s-2.217,.86-2.45,2h4.899Z"/></svg>
);

FiTsFaceEyesXmarks.displayName = 'FiTsFaceEyesXmarks';
