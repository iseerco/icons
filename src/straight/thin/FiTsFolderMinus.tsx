import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFolderMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,14h8v1H8v-1ZM24,5.5V23H0V3.5C0,2.121,1.121,1,2.5,1h5.618l4,2h9.382c1.379,0,2.5,1.121,2.5,2.5ZM1,3.5v3.5H23v-1.5c0-.827-.673-1.5-1.5-1.5H11.882L7.882,2H2.5c-.827,0-1.5,.673-1.5,1.5ZM23,22V8H1v14H23Z"/></svg>

);
