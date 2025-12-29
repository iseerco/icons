import React from 'react';
import type { IconProps } from '../../types';

export const FiTrV: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24.011c-1.662,0-3.071-.961-3.679-2.508L.036,.685C-.067,.429,.059,.138,.315,.035c.259-.099,.548,.023,.649,.28L9.251,21.136c1.113,2.535,4.383,2.536,5.497,.002L23.036,.315c.102-.257,.391-.379,.649-.28,.256,.103,.382,.394,.279,.649L15.678,21.505c-.606,1.545-2.016,2.506-3.678,2.506Z"/></svg>
);

FiTrV.displayName = 'FiTrV';
