import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMars: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<path d="M458.622,0.209H341.65v63.803h61.229l-99.362,99.362c-86.388-61.475-206.255-41.28-267.731,45.108  s-41.28,206.255,45.108,267.731c86.388,61.475,206.255,41.28,267.731-45.108c47.417-66.633,47.417-155.989,0-222.622l99.362-99.362  v61.229h63.803V53.378C511.791,24.014,487.986,0.209,458.622,0.209z M192.777,446.828c-70.475,0-127.605-57.131-127.605-127.605  s57.131-127.605,127.605-127.605s127.605,57.131,127.605,127.605C320.312,389.668,263.223,446.758,192.777,446.828z"/>
</svg>
);

FiBsMars.displayName = 'FiBsMars';
