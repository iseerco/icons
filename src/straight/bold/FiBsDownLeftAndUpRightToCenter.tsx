import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDownLeftAndUpRightToCenter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.998,14.411l-.334,7.522-3.238-3.238-5.278,5.278L.026,21.852l5.278-5.278-3.238-3.238,7.522-.334c.795-.043,1.452,.614,1.409,1.409ZM23.983,2.138L21.862,.017l-5.288,5.288-3.238-3.238-.334,7.522c-.043,.795,.614,1.452,1.409,1.409l7.522-.334-3.238-3.238,5.288-5.288Z"/></svg>
);

FiBsDownLeftAndUpRightToCenter.displayName = 'FiBsDownLeftAndUpRightToCenter';
