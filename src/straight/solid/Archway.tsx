import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Archway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.798,6L0,3.303V1H24V3.303l-1.798,2.697H1.798Zm20.202,2H2v13H0v2H8V15c0-2.206,1.794-4,4-4s4,1.794,4,4v8h8v-2h-2V8Z"/></svg>

);
