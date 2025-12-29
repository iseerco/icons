import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBookUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,16v-2.5c0-1.378,1.121-2.5,2.5-2.5h5c1.379,0,2.5,1.122,2.5,2.5v2.5h-1v-2.5c0-.827-.673-1.5-1.5-1.5h-5c-.827,0-1.5.673-1.5,1.5v2.5h-1Zm2-9c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm1,0c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2ZM22,1.5v22.5H4.5c-1.379,0-2.5-1.122-2.5-2.5V2.5c0-1.378,1.121-2.5,2.5-2.5h16c.827,0,1.5.673,1.5,1.5Zm-1.5-.5H7v18h14V1.5c0-.276-.225-.5-.5-.5ZM3,2.5v17.001c.418-.315.938-.501,1.5-.501h1.5V1h-1.5c-.827,0-1.5.673-1.5,1.5Zm18,20.5v-3H4.5c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5h16.5Z"/></svg>

);
