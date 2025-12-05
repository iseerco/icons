import React from 'react';
import type { IconProps } from '../../types';

export const FiTrBarsFilter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,3.5c0,.28-.22,.5-.5,.5H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H23.5c.28,0,.5,.22,.5,.5ZM15.5,21h-7c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h7c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Zm4-9H4.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h15c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Z"/></svg>
);

FiTrBarsFilter.displayName = 'FiTrBarsFilter';
