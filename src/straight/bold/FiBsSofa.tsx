import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSofa = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,8h-2v-2.5c0-3.033-2.467-5.5-5.5-5.5h-7C5.467,0,3,2.467,3,5.5v2.5H1v13h2v3h3v-3h12v3h3v-3h2v-13Zm-3,10H4v-2h16v2ZM6,5.5c0-1.378,1.122-2.5,2.5-2.5h7c1.378,0,2.5,1.122,2.5,2.5v7.5H6v-7.5Z"/>
</svg>

);
