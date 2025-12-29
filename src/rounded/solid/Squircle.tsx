import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Squircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.18,.18c4.59,.42,8.23,4.05,8.64,8.64,.12,1.34,.18,2.41,.18,3.18s-.06,1.83-.18,3.18h0c-.42,4.59-4.05,8.22-8.64,8.64-1.37,.12-2.41,.18-3.18,.18s-1.81-.06-3.18-.18C4.23,23.4,.6,19.77,.18,15.18c-.12-1.34-.18-2.41-.18-3.18s.06-1.83,.18-3.18C.6,4.23,4.23,.6,8.82,.18h0c1.37-.12,2.41-.18,3.18-.18s1.81,.06,3.18,.18h0Z"/></svg>

);
