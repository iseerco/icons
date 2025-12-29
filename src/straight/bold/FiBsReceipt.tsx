import React from 'react';
import type { IconProps } from '../../types';

export const FiBsReceipt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Isolation_Mode" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<path d="M378.936,0H126.987C92.2,0,64,28.2,64,62.987v448.637l83.983-58.389l52.489,36.533l52.489-36.512l52.489,36.512  l52.489-36.491l83.983,58.473V62.987C441.923,28.2,413.723,0,378.936,0z M378.936,391.066l-20.996-14.55l-52.489,36.533  l-52.489-36.512l-52.489,36.512l-52.489-36.491l-20.996,14.697V62.987h251.949V391.066z"/>
<rect x="170.667" y="128" width={size} height={size}/>
<rect x="170.667" y="234.667" width={size} height={size}/>
</svg>
);

FiBsReceipt.displayName = 'FiBsReceipt';
