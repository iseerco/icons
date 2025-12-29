import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Kpi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.5,7h-3.5v11h2v-4h1.5c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5Zm0,5h-1.5v-3h1.5c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5Zm6.5-5v11h-2V7h2Zm-14.097,4.723l2.746,6.277h-2.242l-2.254-5h-1.153v5h-2V7h2v4h.829l2.351-4h2.383l-2.66,4.723Z"/>
</svg>

);
