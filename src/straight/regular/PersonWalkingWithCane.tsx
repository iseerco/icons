import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonWalkingWithCane = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6.01,2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5ZM23.97,23.04l-1.76,.94-4.99-9.32-3.96-2.97-1.25-1.91v7.03l.76,.49,2.9,5.75-1.79,.9-2.66-5.27-5.22-3.39v-6.35L1.86,15.53,.16,14.47,4.62,7.4c.55-.88,1.5-1.4,2.54-1.4h3.14c1.02,0,1.96,.51,2.51,1.36l1.93,2.95,4.04,3.03,5.19,9.71Zm-13.96-7.52v-7.52h-2v6.22l2,1.3Zm-5.14,8.48h2.04l.85-5.17s-1.75-1.15-1.8-1.19l-1.09,6.36Z"/></svg>

);
