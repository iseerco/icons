import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Explosion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.183,22h4.817v2H15.379l4.817-7h-3.917l3.41-10.464-6.172,5.649-3.516-5.04v6.542l-5.483-1.831,3.795,6.144h-3.825l5.031,6H0v-2H5.231L.201,16H4.727L-.085,8.21l8.085,2.7V.784l5.85,8.384L23.944-.071l-4.911,15.071h4.966l-4.817,7Zm-5.22-3l.037-4-2.163,2.837-1.837-1.837v4h-1.5l3.111,4h1.389l3.5-5h-2.537Z"/>
</svg>

);
