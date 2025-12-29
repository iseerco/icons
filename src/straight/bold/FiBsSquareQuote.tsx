import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,12.5h0v.5c0,2.206-1.794,4-4,4v-3c.552,0,1-.448,1-1h0s-2,0-2,0v-3c0-1.103.897-2,2-2h3v4.5Zm7-4.5h-3c-1.103,0-2,.897-2,2v3h2c0,.552-.448,1-1,1v3c2.206,0,4-1.794,4-4v-.5h0v-4.5Zm6-4.5v20.5H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.225-.5-.5-.5H3.5c-.275,0-.5.225-.5.5v17.5h18V3.5Z"/></svg>

);
