import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNftSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11.998,.058L1,6.114v11.847l11.002,5.978,10.998-6.016V6.076L11.998,.058Zm8.002,16.087l-8.002,4.377-7.998-4.345V7.886L12.002,3.48l7.998,4.375v8.291Zm-9-7.145h3v1.25h-1.75v1.47h1.75v1.25h-1.75v2.03h-1.25v-6Zm-2.712,0h1.212v6h-1.327l-1.442-3.25v3.25h-1.231v-6h1.327v.008l1.461,3.242v-3.25Zm7.962,1.25h-1.25v-1.25h3.75v1.25h-1.25v4.75h-1.25v-4.75Z"/>
</svg>

);
