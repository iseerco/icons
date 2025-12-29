import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTaxi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.379,5.393A3.5,3.5,0,0,0,17.059,3H16l-.544-1.632A2,2,0,0,0,13.558,0H10.442a2,2,0,0,0-1.9,1.368L8,3H6.941a3.5,3.5,0,0,0-3.32,2.394L2.752,8H0v3H1.752L1.1,12.969A3.481,3.481,0,0,0,0,15.5V21H3v3H7V21H17v3h4V21h3V15.5a3.481,3.481,0,0,0-1.1-2.531L22.248,11H24V8H21.248ZM17,16.5h0A1.5,1.5,0,0,1,18.5,15h0A1.5,1.5,0,0,1,20,16.5h0A1.5,1.5,0,0,1,18.5,18h0A1.5,1.5,0,0,1,17,16.5ZM6.941,6H17.059a.5.5,0,0,1,.474.342L19.419,12H4.581L6.467,6.342A.5.5,0,0,1,6.941,6ZM5.5,18h0A1.5,1.5,0,0,1,4,16.5H4A1.5,1.5,0,0,1,5.5,15h0A1.5,1.5,0,0,1,7,16.5H7A1.5,1.5,0,0,1,5.5,18Z"/></svg>

);
