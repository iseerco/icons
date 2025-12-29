import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckPlow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18.586V9.414l1.957-1.957L22.543,6.043,20,8.586V13H18a3,3,0,0,0-2.441-2.947L10.84,3.285A3,3,0,0,0,8.379,2H4v8H3a3,3,0,0,0-3,3v5H1v.5a3.5,3.5,0,0,0,7,0V18h2v.5a3.5,3.5,0,0,0,7,0V18h1V15h2v4.414l2.605,2.606,1.415-1.415ZM6,4H8.379a1,1,0,0,1,.82.428L13.084,10H6ZM2,13a1,1,0,0,1,1-1H15a1,1,0,0,1,1,1v3H2Zm4,5.5a1.5,1.5,0,0,1-3,0V18H6Zm9,0a1.5,1.5,0,0,1-3,0V18h3Z"/></svg>

);
