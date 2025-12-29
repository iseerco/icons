import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM17.707,14.535l-3.586,3.586h0a3,3,0,0,1-4.243,0L6.293,14.535l-.024-.025a1,1,0,1,1,1.438-1.389L11,16.414,10.993,6a1,1,0,0,1,2,0L13,16.413l3.293-3.292a1,1,0,1,1,1.414,1.414Z"/></svg>

);
