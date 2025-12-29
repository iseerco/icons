import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChalkboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,20V5.5c0-1.379-1.122-2.5-2.5-2.5H3.5c-1.378,0-2.5,1.121-2.5,2.5v14.5H0v1h24v-1h-1ZM2,5.5c0-.827.673-1.5,1.5-1.5h17c.827,0,1.5.673,1.5,1.5v14.5h-3v-2h-5v2H2V5.5Zm16,14.5h-3v-1h3v1Z"/>
</svg>

);
