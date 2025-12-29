import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WalletArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,8v16H3.5c-1.93,0-3.5-1.57-3.5-3.5V6.5h.051c.24-1.416,1.466-2.5,2.949-2.5h10v2H3c-.552,0-1,.449-1,1s.448,1,1,1h13v4h6v-4h2Zm-4,8c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm2.961-12.894l-2.49-2.491c-.821-.819-2.154-.818-2.974,0l-2.448,2.449,1.414,1.414,1.537-1.537v7.058h2V2.973l1.547,1.547,1.414-1.414Z"/>
</svg>

);
