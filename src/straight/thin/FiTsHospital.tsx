import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHospital = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,6h-1.5v-3.5c0-1.378-1.121-2.5-2.5-2.5H6.5c-1.379,0-2.5,1.122-2.5,2.5v3.5h-1.5c-1.379,0-2.5,1.122-2.5,2.5v15.5h24v-15.5c0-1.378-1.121-2.5-2.5-2.5ZM1,23v-14.5c0-.827.673-1.5,1.5-1.5h1.5v16H1Zm18,0H5V2.5c0-.827.673-1.5,1.5-1.5h11c.827,0,1.5.673,1.5,1.5v20.5Zm4,0h-3V7h1.5c.827,0,1.5.673,1.5,1.5v14.5Zm-15-9h3v1h-3v-1Zm5,0h3v1h-3v-1Zm-5,4h3v1h-3v-1Zm5,0h3v1h-3v-1Zm-.5-10.5v2.5h-1v-2.5h-2.5v-1h2.5v-2.5h1v2.5h2.5v1h-2.5Z"/></svg>

);
