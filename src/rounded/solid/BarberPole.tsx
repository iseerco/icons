import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BarberPole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,19c0,.552-.448,1-1,1h-.35c-.826,2.327-3.043,4-5.65,4s-4.824-1.673-5.65-4h-.35c-.552,0-1-.448-1-1s.448-1,1-1v-2.172l2.163,2.163,2.837.009-5-5v-2.787l7.787,7.787h2.828L6,7.385v-1.385c-.552,0-1-.448-1-1s.448-1,1-1h.35C7.176,1.673,9.393,0,12,0s4.824,1.673,5.65,4h.35c.552,0,1,.448,1,1s-.448,1-1,1v2.172l-2.163-2.163-2.837-.009,5,5v2.855l-7.855-7.855h-2.828l10.683,10.683v1.317c.552,0,1,.448,1,1Z"/>
</svg>

);
