import React from 'react';
import type { IconProps } from '../../types';

export const CaretCircleUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0A12,12,0,1,1,0,12,12.013,12.013,0,0,1,12,0Zm0,22A10,10,0,1,0,2,12,10.011,10.011,0,0,0,12,22Zm5.731-9.6L12.644,7.25a.9.9,0,0,0-1.288,0L6.269,12.4a.924.924,0,0,0,.644,1.575H17.087A.924.924,0,0,0,17.731,12.4Z"/></svg>
);

CaretCircleUp.displayName = 'CaretCircleUp';
