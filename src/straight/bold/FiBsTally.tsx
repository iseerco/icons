import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTally = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="24.014 8.279 22.797 5.537 21 6.334 21 0 18 0 18 7.666 16 8.553 16 0 13 0 13 9.885 11 10.773 11 0 8 0 8 12.104 6 12.992 6 0 3 0 3 14.323 .006 15.652 1.223 18.395 3 17.606 3 24 6 24 6 16.274 8 15.386 8 24 11 24 11 14.055 13 13.167 13 24 16 24 16 11.836 18 10.948 18 24 21 24 21 9.616 24.014 8.279"/></svg>

);
