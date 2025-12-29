import React from 'react';
import type { IconProps } from '../../types';

export const SortDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11.744,18c-.757,0-1.48-.323-1.985-.886L3.328,10.587c-.602-.657-.747-1.535-.402-2.317,.345-.783,1.09-1.27,1.945-1.27h13.745c.854,0,1.6,.486,1.944,1.269s.2,1.66-.376,2.291l-6.487,6.589c-.474,.528-1.197,.852-1.953,.852Z"/></svg>
);

SortDown.displayName = 'SortDown';
