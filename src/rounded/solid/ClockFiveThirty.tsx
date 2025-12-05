import React from 'react';
import type { IconProps } from '../../types';

export const ClockFiveThirty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.046,15.965c-.437,.336-1.066,.254-1.402-.184l-.644-.838v3.057c0,.552-.448,1-1,1s-1-.448-1-1v-6c0-.428,.273-.809,.678-.947,.404-.139,.854-.002,1.115,.337l2.437,3.172c.336,.438,.254,1.066-.184,1.402Z"/></svg>
);

ClockFiveThirty.displayName = 'ClockFiveThirty';
