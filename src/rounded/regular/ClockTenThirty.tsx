import React from 'react';
import type { IconProps } from '../../types';

export const ClockTenThirty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm1,16v-6c0-.357-.19-.688-.5-.866l-3.464-2c-.479-.277-1.09-.112-1.366,.366-.276,.479-.112,1.09,.366,1.366l2.964,1.711v5.423c0,.553,.448,1,1,1s1-.447,1-1Z"/></svg>
);

ClockTenThirty.displayName = 'ClockTenThirty';
