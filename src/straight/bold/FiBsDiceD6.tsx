import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiceD6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.753.488a3.387,3.387,0,0,0-3.505,0L1,6.062V17.938l9.247,5.574a3.385,3.385,0,0,0,3.505,0L23,17.938V6.062ZM11.8,3.057a.384.384,0,0,1,.4,0L18.6,6.91,12,10.886,5.405,6.911ZM4,16.242V9.566l6.5,3.919v6.676Zm9.5,3.919V13.485L20,9.566v6.676Z"/></svg>

);
