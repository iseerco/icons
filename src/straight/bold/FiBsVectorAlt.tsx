import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVectorAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,15V12a9.5,9.5,0,0,0-5.092-8.408,4.5,4.5,0,0,0-8.816,0A9.5,9.5,0,0,0,2.5,12v3H0v6.5A2.5,2.5,0,0,0,2.5,24H9V15H5.5V12A6.485,6.485,0,0,1,8.143,6.781a4.462,4.462,0,0,0,7.714,0A6.485,6.485,0,0,1,18.5,12v3H15v9h6.5A2.5,2.5,0,0,0,24,21.5V15ZM6,18v3H3V18ZM12,6a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,6Zm9,15H18V18h3Z"/></svg>

);
