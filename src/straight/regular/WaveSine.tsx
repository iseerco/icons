import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaveSine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.762,21c-4.495,0-6.178-6.588-6.73-8.752-1.229-4.809-2.841-7.248-4.793-7.248-2.495,0-4.238,3.701-4.238,9H0C0,7.318,2.448,3,6.238,3c4.495,0,6.178,6.588,6.73,8.752,1.229,4.809,2.841,7.248,4.793,7.248,2.495,0,4.238-3.701,4.238-9h2c0,6.682-2.448,11-6.238,11Z"/></svg>

);
