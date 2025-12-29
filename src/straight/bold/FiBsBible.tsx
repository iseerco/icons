import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBible = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0H5C2.794,0,1,1.794,1,4v16c0,2.206,1.794,4,4,4h18V2.5c0-1.378-1.122-2.5-2.5-2.5ZM5,3h15v13H5c-.347,0-.678.058-1,.142V4c0-.551.449-1,1-1Zm0,18c-.551,0-1-.449-1-1s.449-1,1-1h15v2H5Zm6-11h-2v-3h2v-2h3v2h2v3h-2v4h-3v-4Z"/>
</svg>

);
