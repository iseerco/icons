import React from 'react';
import type { IconProps } from '../../types';

export const FiTrA: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.964,23.315L15.679,2.497c-1.143-3.3-6.214-3.3-7.356-.002L.036,23.315c-.103,.257,.023,.547,.279,.649,.258,.104,.548-.023,.649-.279l3.059-7.685h15.954l3.059,7.685c.102,.259,.399,.381,.649,.279,.256-.102,.382-.393,.279-.649ZM4.421,15L9.252,2.862c1.114-2.533,4.384-2.533,5.497,.002l4.83,12.135H4.421Z"/></svg>
);

FiTrA.displayName = 'FiTrA';
