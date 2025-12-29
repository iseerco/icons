import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSeller = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-9c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm15,13c0,1.105-.831,2-1.857,2h-.619c-1.026,0-1.857-.895-1.857-2,0,1.105-.831,2-1.857,2h-.619c-1.026,0-1.857-.895-1.857-2,0,1.105-.831,2-1.857,2h-.619c-1.026,0-1.857-.895-1.857-2l1.238-4h10.524l1.238,4Zm-4,3h3v5h-11v-5h3v2h5v-2Zm-10.48-5l-.932,3h-3.588c-1.103,0-2,.897-2,2v5H0v-5c0-2.757,2.243-5,5-5h4.52Z"/>
</svg>

);
