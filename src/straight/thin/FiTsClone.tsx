import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsClone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,18h1v6H0v-13.5c0-1.378,1.121-2.5,2.5-2.5h3.5v1h-3.5c-.827,0-1.5.673-1.5,1.5v12.5h14v-5ZM24,2.5v13.5H8V2.5c0-1.378,1.121-2.5,2.5-2.5h11c1.379,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5h-11c-.827,0-1.5.673-1.5,1.5v12.5h14V2.5Z"/></svg>

);
