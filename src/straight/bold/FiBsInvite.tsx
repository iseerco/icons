import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsInvite = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,21h4v3h-4v-3ZM21,2h-3V0h-3v2h-6V0h-3v2h-3c-1.654,0-3,1.346-3,3v7.027c.721-.969,1.773-1.778,3-2.027h18c1.227.249,2.279,1.059,3,2.027v-7.027c0-1.654-1.346-3-3-3ZM6,20H2c-1.105,0-2,.895-2,2v2h8v-2c0-1.105-.895-2-2-2Zm1-5c0-1.657-1.343-3-3-3s-3,1.343-3,3,1.343,3,3,3,3-1.343,3-3Zm15,5h-4c-1.105,0-2,.895-2,2v2h8v-2c0-1.105-.895-2-2-2Zm1-5c0-1.657-1.343-3-3-3s-3,1.343-3,3,1.343,3,3,3,3-1.343,3-3Z"/>
</svg>

);
