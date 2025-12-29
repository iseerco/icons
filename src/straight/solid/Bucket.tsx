import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bucket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.381,8c-.503-3.159-2.572-5.8-5.381-7.111v-.889h-8v.889c-2.809,1.31-4.878,3.951-5.381,7.111h-1.619v2h1.692l.429,2h14.714l-.429,2H3.549l2.143,10h12.617l3-14h1.692v-2h-1.619Zm-16.73,0c.414-2.031,1.654-3.76,3.349-4.834v.834h8v-.834c1.695,1.074,2.935,2.804,3.349,4.834H4.651Z"/>
</svg>

);
