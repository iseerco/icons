import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEmployeeMan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,14c0-1.103-.897-2-2-2h-3c-1.103,0-2,.897-2,2-1.654,0-3,1.346-3,3v7h13v-7c0-1.654-1.346-3-3-3Zm0,7h-7v-4s2,0,2,0v2h3v-2h2v4Zm-12-9c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-9c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm1.026,11c-.635.838-1.026,1.87-1.026,3h-4c-1.103,0-2,.897-2,2v5H0v-5c0-2.757,2.243-5,5-5h5.026Z"/>
</svg>

);
