import React from 'react';
import type { IconProps } from '../../types';

export const DiceD6: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2.246,5.316a4.964,4.964,0,0,1,1.181-1l6-3.6a4.987,4.987,0,0,1,5.145,0l6,3.6a4.95,4.95,0,0,1,1.182,1L12,11.169ZM13,12.9V23.889a4.981,4.981,0,0,0,1.572-.6l6-3.6A5.027,5.027,0,0,0,23,15.4V8.6a4.95,4.95,0,0,0-.258-1.544Zm-2,0L1.258,7.056A4.95,4.95,0,0,0,1,8.6v6.8a5.027,5.027,0,0,0,2.427,4.288l6,3.6a4.986,4.986,0,0,0,1.573.6Z"/></svg>
);

DiceD6.displayName = 'DiceD6';
