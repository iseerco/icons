import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSortAlphaUpAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,0H15V3h4.131l-4.131,4.957v3.043h8v-3h-4.131l4.131-4.957V0Zm0,17v7h-3v-2h-2v2h-3v-7c0-2.206,1.794-4,4-4s4,1.794,4,4Zm-2.667-.167c0-.736-.598-1.333-1.333-1.333s-1.333,.598-1.333,1.333v2.667h2.667v-2.667ZM10.896,7.604l-2.896-2.896V24h-3V4.707l-2.896,2.896L-.018,5.482,4.732,.732C5.22,.245,5.859,0,6.5,0s1.28,.244,1.768,.731l4.75,4.75-2.121,2.121Z"/></svg>
);

FiBsSortAlphaUpAlt.displayName = 'FiBsSortAlphaUpAlt';
