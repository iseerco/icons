import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReferArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,12c3.309,0,6-2.691,6-6S11.309,0,8,0,2,2.691,2,6s2.691,6,6,6Zm0-9c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm15.268,15.268l-3.75,3.75-2.121-2.121,1.896-1.896h-2.293c-1.103,0-2,.897-2,2v4h-3v-4c0-2.757,2.243-5,5-5h2.293l-1.896-1.896,2.121-2.121,3.75,3.75c.975.975.975,2.561,0,3.535Zm-10.239-4.028c-1.006.696-1.822,1.648-2.352,2.761h-5.676c-1.103,0-2,.897-2,2v5H0v-5c0-2.757,2.243-5,5-5h6.5c.533,0,1.047.084,1.529.239Z"/>
</svg>

);
