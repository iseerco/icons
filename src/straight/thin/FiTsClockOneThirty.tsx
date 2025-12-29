import React from 'react';
import type { IconProps } from '../../types';

export const FiTsClockOneThirty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm0,10.671l3.395-4.364-.789-.614-3.605,4.636v7.671h1v-7.329Z"/></svg>
);

FiTsClockOneThirty.displayName = 'FiTsClockOneThirty';
