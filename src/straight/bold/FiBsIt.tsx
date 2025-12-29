import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,19v2h4v3H6.5v-3h4v-2H0V5c0-1.654,1.346-3,3-3h1v3h-1v11h18V5h-1v-3h1c1.654,0,3,1.346,3,3v14h-10.5ZM6.052,7.695l1.523-.877c-.049-.265-.075-.539-.075-.818s.026-.553.075-.818l-1.523-.877,1.498-2.6,1.525.878c.416-.357.898-.639,1.425-.826V0h3v1.757c.527.187,1.009.469,1.425.826l1.525-.878,1.498,2.6-1.523.877c.049.265.075.539.075.818s-.026.553-.075.818l1.523.877-1.498,2.6-1.525-.878c-.416.357-.898.639-1.425.826v1.757h-3v-1.757c-.527-.187-1.009-.469-1.425-.826l-1.525.878-1.498-2.6Zm4.448-1.695c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5,1.5Z"/>
</svg>

);
