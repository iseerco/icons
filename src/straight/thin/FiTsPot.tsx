import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4H12.5V1h3.5V0H8V1h3.5v3H0v1H2V21.5c0,1.379,1.122,2.5,2.5,2.5h15c1.378,0,2.5-1.121,2.5-2.5V5h2v-1Zm-3,17.5c0,.827-.673,1.5-1.5,1.5H4.5c-.827,0-1.5-.673-1.5-1.5V5H21V21.5Z"/></svg>

);
