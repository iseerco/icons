import React from 'react';
import type { IconProps } from '../../types';

export const FiTrFrancSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,.5c0,.28-.22,.5-.5,.5H9.5c-1.93,0-3.5,1.57-3.5,3.5v6.5h11.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H6v5h6.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H6v5.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-5.5H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H5V4.5C5,2.02,7.02,0,9.5,0h12c.28,0,.5,.22,.5,.5Z"/></svg>
);

FiTrFrancSign.displayName = 'FiTrFrancSign';
