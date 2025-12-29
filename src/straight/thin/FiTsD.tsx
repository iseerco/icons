import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,24H4.5c-1.379,0-2.5-1.122-2.5-2.5V2.5C2,1.122,3.121,0,4.5,0H12.5c5.238,0,9.5,4.262,9.5,9.5v5c0,5.238-4.262,9.5-9.5,9.5ZM4.5,1c-.827,0-1.5,.673-1.5,1.5V21.5c0,.827,.673,1.5,1.5,1.5H12.5c4.687,0,8.5-3.813,8.5-8.5v-5c0-4.687-3.813-8.5-8.5-8.5H4.5Z"/></svg>

);
