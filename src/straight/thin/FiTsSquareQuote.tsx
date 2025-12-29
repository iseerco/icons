import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,10.1v2.9h4c0,1.654-1.346,3-3,3v1c2.206,0,4-1.794,4-4v-5h-2.9c-1.158,0-2.1.941-2.1,2.1Zm4,1.9h-3v-1.9c0-.606.493-1.1,1.1-1.1h1.9v3Zm-11-1.9v2.9h4c0,1.654-1.346,3-3,3v1c2.206,0,4-1.794,4-4v-5h-2.9c-1.158,0-2.1.941-2.1,2.1Zm4,1.9h-3v-1.9c0-.606.493-1.1,1.1-1.1h1.9v3ZM21.5,0H2.5C1.121,0,0,1.121,0,2.5v21.5h24V2.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5Z"/></svg>

);
