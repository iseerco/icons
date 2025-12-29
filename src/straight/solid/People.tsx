import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const People = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,2.5C2.5,1.12,3.62,0,5,0s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm7.5,6.5v8h-2v7h-2v-7h-2v7H2v-7H0V9c0-1.65,1.35-3,3-3H7c1.65,0,3,1.35,3,3Zm8-4c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm3,15v4h-2v-4h-2v4h-2v-4h-2.13l1.42-11.37c.19-1.5,1.47-2.63,2.98-2.63h1.47c1.51,0,2.79,1.13,2.98,2.63l1.42,11.37h-2.13Z"/></svg>

);
