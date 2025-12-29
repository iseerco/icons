import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTrailer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,20h-3V2.5c0-1.379-1.122-2.5-2.5-2.5H2.5C1.122,0,0,1.121,0,2.5V18.5c0,1.379,1.122,2.5,2.5,2.5h1.536c.243,1.694,1.704,3,3.464,3s3.221-1.306,3.464-3h13.036v-1ZM2.5,1H18.5c.827,0,1.5,.673,1.5,1.5V13h-3V3.5h-1V13h-3V3.5h-1V13h-3V3.5h-1V13h-3V3.5h-1V13H1V2.5c0-.827,.673-1.5,1.5-1.5ZM1,18.5v-4.5H20v6H10.964c-.243-1.694-1.704-3-3.464-3s-3.221,1.306-3.464,3h-1.536c-.827,0-1.5-.673-1.5-1.5Zm6.5,4.5c-1.378,0-2.5-1.121-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.122,2.5-2.5,2.5Z"/></svg>

);
