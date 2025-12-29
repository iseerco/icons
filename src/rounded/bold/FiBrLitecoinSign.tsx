import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLitecoinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,22.5c0,.83-.67,1.5-1.5,1.5H9.5c-3.03,0-5.5-2.47-5.5-5.5v-4.87l-1.95,.77c-.18,.07-.37,.1-.55,.1-.6,0-1.16-.36-1.4-.95-.3-.77,.08-1.64,.85-1.95l3.05-1.2V1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v7.73l7.95-3.12c.77-.3,1.64,.08,1.94,.85,.3,.77-.08,1.64-.85,1.95l-9.05,3.55v6.05c0,1.38,1.12,2.5,2.5,2.5h11c.83,0,1.5,.67,1.5,1.5Z"/></svg>

);
