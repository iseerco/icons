import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowDownSmallBig: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.29,18.42l.71,.71-4.44,4.44c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44L.01,19.13l.71-.71,4.28,4.28V0h1V22.71l4.29-4.29Zm3.71-5.42h10v10H14V13Zm1,9h8V14H15v8ZM24,1V9h-8V1h8Zm-1,1h-6v6h6V2Z"/></svg>
);

FiTsArrowDownSmallBig.displayName = 'FiTsArrowDownSmallBig';
