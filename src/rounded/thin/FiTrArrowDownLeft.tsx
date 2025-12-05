import React from 'react';
import type { IconProps } from '../../types';

export const FiTrArrowDownLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.85,.15c-.2-.2-.51-.2-.71,0L1.42,21.88c-.26-.4-.42-.87-.42-1.38V10.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v10c0,1.93,1.57,3.5,3.5,3.5H13.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5H3.5c-.51,0-.98-.15-1.38-.42L23.85,.85c.2-.2,.2-.51,0-.71Z"/></svg>
);

FiTrArrowDownLeft.displayName = 'FiTrArrowDownLeft';
