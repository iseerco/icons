import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThumbsDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.951,12.3l-.705-5A5.024,5.024,0,0,0,18.3,3H8V18.584l1.626,3.3a3.038,3.038,0,0,0,5.721-1.838L15.011,18H19a5,5,0,0,0,4.951-5.7Z"/><path d="M0,8v5a5.006,5.006,0,0,0,5,5H6V3H5A5.006,5.006,0,0,0,0,8Z"/></svg>

);
