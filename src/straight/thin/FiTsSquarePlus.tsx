import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquarePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,11.5h4.5v1h-4.5v4.5h-1v-4.5H7v-1h4.5V7h1v4.5ZM24,2.5V24H0V2.5C0,1.121,1.122,0,2.5,0H21.5c1.378,0,2.5,1.121,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V23H23V2.5Z"/></svg>

);
