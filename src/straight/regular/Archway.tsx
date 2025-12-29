import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Archway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.303V1H0V3.303l2,3v14.697H0v2H8V15c0-2.206,1.794-4,4-4s4,1.794,4,4v8h8v-2h-2V6.303l2-3Zm-2.202-.303l-1.333,2H3.535l-1.333-2H21.798Zm-3.798,18v-6c0-3.309-2.691-6-6-6s-6,2.691-6,6v6h-2V7H20v14h-2Z"/></svg>

);
