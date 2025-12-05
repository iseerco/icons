import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowAltToTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.357,1.613c-.689-.779-2.024-.78-2.714,0l-5.769,6.388h6.625V24h1V8h6.625L13.357,1.613Zm-1.97,.667l.003-.003c.315-.356,.899-.36,1.221,.003l4.263,4.72H7.125L11.388,2.28ZM21,0V1H3V0H21Z"/></svg>
);

FiTsArrowAltToTop.displayName = 'FiTsArrowAltToTop';
