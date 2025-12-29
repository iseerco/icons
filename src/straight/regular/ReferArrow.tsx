import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ReferArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.414,17.414l-3.75,3.75-1.414-1.414,2.75-2.75h-3.5c-1.379,0-2.5,1.121-2.5,2.5v4.5h-2v-4.5c0-2.481,2.019-4.5,4.5-4.5h3.5l-2.75-2.75,1.414-1.414,3.75,3.75c.78.779.78,2.049,0,2.828ZM2,6C2,2.691,4.691,0,8,0s6,2.691,6,6-2.691,6-6,6-6-2.691-6-6Zm2,0c0,2.206,1.794,4,4,4s4-1.794,4-4-1.794-4-4-4-4,1.794-4,4Zm7.5,8h-7c-2.481,0-4.5,2.019-4.5,4.5v5.5h2v-5.5c0-1.379,1.121-2.5,2.5-2.5h7c.172,0,.339.018.501.051.384-.609.862-1.152,1.42-1.604-.585-.278-1.231-.447-1.92-.447Z"/>
</svg>

);
