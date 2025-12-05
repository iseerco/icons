import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTelescope: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m21.247,11.251l2.765-1.166L19.794.085l-2.765,1.166.557,1.32L2.763,8.897l.969,2.298L.046,12.749l1.165,2.764,3.686-1.554.974,2.31,5.065-2.161-4.344,9.893h3.277l3.631-8.269,3.631,8.269h3.277l-5.154-11.736,5.44-2.322.552,1.308Zm-13.782,1.076l-.777-1.844,12.064-5.148.777,1.843-12.064,5.149Z"/></svg>
);

FiBsTelescope.displayName = 'FiBsTelescope';
