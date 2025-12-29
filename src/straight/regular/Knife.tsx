import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Knife = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.679.155a2.219,2.219,0,0,0-2.445.558L-.023,22.61l1.467,1.358,5.5-5.941,0,.046C19.958,16.885,24,6.242,24,2.5V2.145A2.091,2.091,0,0,0,22.679.155ZM22,2.5c0,1.878-2.323,11.141-12.957,13.254L21.694,2.079A.232.232,0,0,1,21.866,2a.19.19,0,0,1,.073.013c.031.011.062.024.062.127Z"/></svg>

);
