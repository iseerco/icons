import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareJ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1,15c0,2.206-1.794,4-4,4h-4c-2.206,0-4-1.794-4-4,0-.552.447-1,1-1s1,.448,1,1c0,1.103.897,2,2,2h4c1.103,0,2-.897,2-2V6c0-.552.447-1,1-1s1,.448,1,1v9Z"/></svg>

);
