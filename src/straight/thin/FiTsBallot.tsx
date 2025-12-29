import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBallot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H2V2.5C2,1.122,3.122,0,4.5,0h15c1.378,0,2.5,1.122,2.5,2.5V24Zm-19-1H21V2.5c0-.827-.673-1.5-1.5-1.5H4.5c-.827,0-1.5,.673-1.5,1.5V23ZM18,5h-7v1h7v-1Zm0,6h-7v1h7v-1Zm0,6h-7v1h7v-1ZM9,7h-3v-3h3v3Zm-2-1h1v-1h-1v1Zm2,7h-3v-3h3v3Zm-2-1h1v-1h-1v1Zm2,7h-3v-3h3v3Zm-2-1h1v-1h-1v1Z"/></svg>

);
