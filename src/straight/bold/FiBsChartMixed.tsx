import React from 'react';
import type { IconProps } from '../../types';

export const FiBsChartMixed: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M5,11.62L-.06,6.56l2.12-2.12,2.94,2.94L12,.38l5,5L21.94,.44l2.12,2.12-7.06,7.06-5-5-7,7Zm3,3.38h-3v9h3V15Zm-5-2H0v11H3V13Zm10-4h-3v15h3V9Zm5,3h-3v12h3V12Zm5-3h-3v15h3V9Z"/></svg>
);

FiBsChartMixed.displayName = 'FiBsChartMixed';
