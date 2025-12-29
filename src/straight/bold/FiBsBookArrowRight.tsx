import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBookArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,14.5v-2.5h-7v-3h7v-2.5l3.293,3.293c.391,.391,.391,1.024,0,1.414l-3.293,3.293Zm4-6.827l-3-3.001v-1.671H10v13h10.328l2.672-2.673v10.673H5c-2.206,0-4-1.794-4-4V4C1,1.794,2.794,0,5,0h15.5c1.379,0,2.5,1.122,2.5,2.5V7.672Zm-3,13.328v-2H5c-.552,0-1,.449-1,1s.448,1,1,1h15ZM7,3h-2c-.552,0-1,.449-1,1v12.142c.322-.084,.653-.142,1-.142h2V3Z"/></svg>

);
