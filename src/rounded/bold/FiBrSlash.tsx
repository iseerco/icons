import React from 'react';
import type { IconProps } from '../../types';

export const FiBrSlash: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.5,24c-.38,0-.77-.15-1.06-.44L.44,2.56C-.15,1.98-.15,1.02,.44,.44,1.03-.15,1.97-.15,2.56,.44L23.56,21.44c.59,.59,.59,1.54,0,2.12-.29,.29-.68,.44-1.06,.44Z"/></svg>
);

FiBrSlash.displayName = 'FiBrSlash';
