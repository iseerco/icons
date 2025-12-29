import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NftSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11.998,.09L1,6.146v11.785l11.002,5.978,10.998-6.016V6.107L11.998,.09Zm-2.498,14.91h-1.327l-1.442-3.25v3.25h-1.231v-6h1.327v.008l1.461,3.242v-3.25h1.212v6Zm4.5-4.75h-1.75v1.47h1.75v1.25h-1.75v2.03h-1.25v-6h3v1.25Zm4.75,0h-1.25v4.75h-1.25v-4.75h-1.25v-1.25h3.75v1.25Z"/>
</svg>

);
