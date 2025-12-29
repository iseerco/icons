import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShirtLongSleeve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,0h6c0,1.654-1.346,3-3,3s-3-1.346-3-3Zm11.815,1.195c-1.226-.659-2.509-1.031-3.82-1.144-.028,2.733-2.255,4.949-4.995,4.949S7.033,2.784,7.005.051c-1.311.113-2.594.486-3.82,1.144C1.221,2.25,0,4.335,0,6.636v14.388h3v-13.024h2v16h14V8h2v13h3V6.636c0-2.301-1.221-4.386-3.185-5.44Z"/>
</svg>

);
