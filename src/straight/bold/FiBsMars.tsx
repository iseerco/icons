import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M458.622,0.209H341.65v63.803h61.229l-99.362,99.362c-86.388-61.475-206.255-41.28-267.731,45.108  s-41.28,206.255,45.108,267.731c86.388,61.475,206.255,41.28,267.731-45.108c47.417-66.633,47.417-155.989,0-222.622l99.362-99.362  v61.229h63.803V53.378C511.791,24.014,487.986,0.209,458.622,0.209z M192.777,446.828c-70.475,0-127.605-57.131-127.605-127.605  s57.131-127.605,127.605-127.605s127.605,57.131,127.605,127.605C320.312,389.668,263.223,446.758,192.777,446.828z"/>
</svg>

);
