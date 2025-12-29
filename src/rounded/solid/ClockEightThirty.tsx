import React from 'react';
import type { IconProps } from '../../types';

export const ClockEightThirty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,18c0,.552-.448,1-1,1s-1-.448-1-1v-4.268l-1.964,1.134c-.479,.276-1.09,.111-1.366-.366-.276-.478-.112-1.09,.366-1.366l3.464-2c.31-.179,.69-.179,1,0s.5,.509,.5,.866v6Z"/></svg>
);

ClockEightThirty.displayName = 'ClockEightThirty';
