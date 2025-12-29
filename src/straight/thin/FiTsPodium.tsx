import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPodium = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10H3v-3.5c0-1.93,1.57-3.5,3.5-3.5h1.55c.232,1.14,1.242,2,2.45,2h3c1.378,0,2.5-1.122,2.5-2.5s-1.122-2.5-2.5-2.5h-3c-1.207,0-2.217,.86-2.45,2h-1.55c-2.481,0-4.5,2.019-4.5,4.5v3.5H0v1H2.071l2,13h15.858l2-13h2.071v-1ZM10.5,1h3c.827,0,1.5,.673,1.5,1.5s-.673,1.5-1.5,1.5h-3c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5Zm8.571,22H4.929l-1.846-12H20.917l-1.846,12Z"/></svg>

);
