import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLastSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,0H2.5C1.122,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23ZM15,11.145L7,6.645v10.709l8-4.499v4.145h3V7h-3v4.145Zm-7,4.501v-7.291l6.481,3.645-6.481,3.646Zm9-7.646v8h-1V8h1Z"/>
</svg>

);
