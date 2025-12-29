import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarOctogram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>18-star</title><polygon points="12 0 15.515 3.515 20.485 3.515 20.485 8.485 24 12 20.485 15.515 20.485 20.485 15.515 20.485 12 24 8.485 20.485 3.515 20.485 3.515 15.515 0 12 3.515 8.485 3.515 3.515 8.485 3.515 12 0"/></svg>

);
