import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsShuttleVan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12.349c0-.634-.131-1.249-.388-1.828l-3.127-7.037c-.401-.902-1.298-1.484-2.285-1.484H2.5C1.122,2,0,3.122,0,4.5v14.5H2v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h8v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h2v-6.651ZM19.571,3.891l2.715,6.109h-7.286V3h3.2c.593,0,1.131,.35,1.371,.891Zm-11.571,6.109V3h6v7h-6ZM2.5,3H7v7H1V4.5c0-.827,.673-1.5,1.5-1.5ZM7,20c0,1.103-.897,2-2,2s-2-.897-2-2v-1H7v1Zm14,0c0,1.103-.897,2-2,2s-2-.897-2-2v-1h4v1Zm2-2H1v-7H22.729c.179,.429,.271,.882,.271,1.349v5.651Z"/></svg>

);
