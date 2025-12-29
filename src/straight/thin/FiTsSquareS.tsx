import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareS = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.122,0,0,1.121,0,2.5v21.5h24V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5Zm-4-15.218v.218h-1v-.218c0-1.534-1.248-2.782-2.782-2.782h-6.44c-1.531,0-2.777,1.246-2.777,2.777,0,1.236.83,2.335,2.019,2.671l8.231,2.13c1.625.468,2.75,1.963,2.75,3.64,0,2.086-1.697,3.782-3.782,3.782h-6.436c-2.085,0-3.782-1.696-3.782-3.782v-.218h1v.218c0,1.534,1.248,2.782,2.782,2.782h6.436c1.534,0,2.782-1.248,2.782-2.782,0-1.233-.828-2.333-2.014-2.675l-8.229-2.129c-1.627-.461-2.757-1.955-2.757-3.637,0-2.083,1.694-3.777,3.777-3.777h6.44c2.085,0,3.782,1.696,3.782,3.782Z"/></svg>

);
