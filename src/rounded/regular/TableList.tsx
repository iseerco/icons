import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM2,10h4v4H2v-4Zm6,0h14v4h-14v-4Zm14-3v1h-14v-4h11c1.654,0,3,1.346,3,3ZM5,4h1v4H2v-1c0-1.654,1.346-3,3-3Zm-3,13v-1h4v4h-1c-1.654,0-3-1.346-3-3Zm17,3h-11v-4h14v1c0,1.654-1.346,3-3,3Z"/>
</svg>

);
