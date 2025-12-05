import React from 'react';
import type { IconProps } from '../../types';

export const ClockFourThirty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.33,14.5c-.277,.478-.889,.641-1.366,.366l-1.964-1.134v4.268c0,.552-.448,1-1,1s-1-.448-1-1v-6c0-.357,.19-.688,.5-.866s.69-.179,1,0l3.464,2c.479,.276,.642,.888,.366,1.366Z"/></svg>
);

ClockFourThirty.displayName = 'ClockFourThirty';
