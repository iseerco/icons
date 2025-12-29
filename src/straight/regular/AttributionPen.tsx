import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AttributionPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,17c0,.55,.45,1,1,1h3c1.65,0,3,1.35,3,3s-1.35,3-3,3H0v-2H19c.55,0,1-.45,1-1s-.45-1-1-1h-3c-1.65,0-3-1.35-3-3s1.35-3,3-3h8v2h-8c-.55,0-1,.45-1,1Zm-4.45,.5L.04,19.96,2.5,9.45l5.55-1.74L14.88,.88c1.13-1.13,3.11-1.13,4.24,0h0s0,0,0,0c.57,.57,.88,1.32,.88,2.12s-.31,1.55-.88,2.12l-6.83,6.83-1.74,5.55Zm-.55-8.91l1.41,1.41,6.29-6.29c.19-.19,.29-.44,.29-.71s-.1-.52-.29-.71h0c-.38-.38-1.04-.38-1.41,0l-6.29,6.29Zm-1.02,7.22l1.29-4.12-1.97-1.97-4.12,1.29-1.03,4.41,2.86-2.86,1.41,1.41-2.86,2.86,4.41-1.03Z"/></svg>

);
