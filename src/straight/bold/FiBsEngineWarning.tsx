import React from 'react';
import type { IconProps } from '../../types';

export const FiBsEngineWarning: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,5a7,7,0,1,0,7,7A7,7,0,0,0,12,5Zm1.5,12h-3V14h3Zm0-5h-3V7h3ZM5.636,18.364,3.515,20.485a12.013,12.013,0,0,1,0-16.97L5.636,5.636A9.01,9.01,0,0,0,5.636,18.364Zm14.849,2.121-2.121-2.121a9.01,9.01,0,0,0,0-12.728l2.121-2.121A12.013,12.013,0,0,1,20.485,20.485Z"/></svg>
);

FiBsEngineWarning.displayName = 'FiBsEngineWarning';
