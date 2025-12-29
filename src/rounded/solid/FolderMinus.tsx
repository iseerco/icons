import React from 'react';
import type { IconProps } from '../../types';

export const FolderMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,7v-.974C0,3.269,2.243,1.026,5,1.026h2.528c.463,0,.927,.109,1.341,.316l3.156,1.578c.138,.069,.292,.105,.446,.105h6.528c2.405,0,4.418,1.708,4.892,3.974H0Zm24,2v9.026c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9H24Zm-8,7c0-.553-.447-1-1-1h-6c-1.308,.005-1.307,1.995,0,2h6c.553,0,1-.447,1-1Z"/></svg>
);

FolderMinus.displayName = 'FolderMinus';
