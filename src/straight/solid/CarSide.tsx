import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CarSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,9H1.656L3.575,3.937A3.016,3.016,0,0,1,6.381,2H9Zm2,0h8.825L15.84,3.285A3,3,0,0,0,13.379,2H11Zm13,5a3,3,0,0,0-3-3H3a3,3,0,0,0-3,3v4H24ZM7.942,20c.587,3.954-5.472,3.952-4.884,0Zm8.116,0c-.587,3.954,5.472,3.952,4.884,0Z"/></svg>

);
