import React from 'react';
import type { IconProps } from '../../types';

export const Hexagon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24c-.5,0-1-.12-1.46-.37l-7.97-4.27c-.98-.52-1.58-1.54-1.58-2.64V7.26c0-1.11,.61-2.12,1.59-2.65L10.55,.36c.91-.49,1.99-.49,2.9,0l7.96,4.25c.98,.52,1.59,1.54,1.59,2.65v9.46c0,1.11-.61,2.12-1.58,2.64l-7.96,4.27c-.46,.24-.96,.37-1.46,.37Zm0-22c-.17,0-.35,.04-.51,.13L3.53,6.38c-.33,.17-.53,.51-.53,.88v9.46c0,.37,.2,.71,.53,.88l7.97,4.27c.32,.17,.7,.17,1.02,0l7.96-4.27c.33-.17,.53-.51,.53-.88V7.26c0-.37-.2-.71-.53-.88h0L12.51,2.13c-.16-.08-.33-.13-.51-.13Z"/></svg>
);

Hexagon.displayName = 'Hexagon';
