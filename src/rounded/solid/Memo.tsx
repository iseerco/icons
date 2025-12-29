import React from 'react';
import type { IconProps } from '../../types';

export const Memo: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16,0h-8C5.243,0,3,2.243,3,5v14c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-4,17h-4c-.553,0-1-.447-1-1s.447-1,1-1h4c.553,0,1,.447,1,1s-.447,1-1,1Zm4-5h-8c-.553,0-1-.447-1-1s.447-1,1-1h8c.553,0,1,.447,1,1s-.447,1-1,1Zm0-5h-8c-.553,0-1-.447-1-1s.447-1,1-1h8c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>
);

Memo.displayName = 'Memo';
