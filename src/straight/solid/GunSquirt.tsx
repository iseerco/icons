import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GunSquirt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6h-2.101c-.465-2.279-2.484-4-4.899-4H5V0h-2v2H0v10h17c2.414,0,4.434-1.721,4.899-4h2.101v-2Zm-11,2H4v-2h9v2Zm-3,6h2v6h-2v-2h-3.216l-1.112,3.895c-.347,1.237-1.491,2.105-2.781,2.105-.911,0-1.75-.416-2.302-1.143-.551-.727-.726-1.646-.48-2.524l1.812-6.333h6.005l-.571,2h2.646v-2Z"/>
</svg>

);
