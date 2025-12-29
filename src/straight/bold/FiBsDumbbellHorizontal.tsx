import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDumbbellHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,10.5h-1V6.5c0-1.93-1.57-3.5-3.5-3.5h-4.5v7.5h-6V3H4.5c-1.93,0-3.5,1.57-3.5,3.5v4H0v3H1v4c0,1.93,1.57,3.5,3.5,3.5h4.5v-7.5h6v7.5h4.5c1.93,0,3.5-1.57,3.5-3.5v-4h1v-3ZM6,18h-1.5c-.276,0-.5-.225-.5-.5V6.5c0-.276,.224-.5,.5-.5h1.5v12Zm14-.5c0,.275-.224,.5-.5,.5h-1.5V6h1.5c.276,0,.5,.224,.5,.5v11Z"/>
</svg>

);
