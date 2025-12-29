import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFrancSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,1.5c0,.83-.67,1.5-1.5,1.5H9.5c-1.38,0-2.5,1.12-2.5,2.5v4.5h9.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H7v3h4.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H7v3.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-3.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2.5V5.5C4,2.47,6.47,0,9.5,0h11c.83,0,1.5,.67,1.5,1.5Z"/></svg>

);
