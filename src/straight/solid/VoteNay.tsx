import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VoteNay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,2H8c-1.65,0-3,1.35-3,3v12h14V5c0-1.65-1.35-3-3-3Zm-.29,10.29l-1.41,1.41-2.29-2.29-2.29,2.29-1.41-1.41,2.29-2.29-2.29-2.29,1.41-1.41,2.29,2.29,2.29-2.29,1.41,1.41-2.29,2.29,2.29,2.29Zm8.29,2.71v7H0v-7c0-1.65,1.35-3,3-3v7H21v-7c1.65,0,3,1.35,3,3Z"/></svg>

);
