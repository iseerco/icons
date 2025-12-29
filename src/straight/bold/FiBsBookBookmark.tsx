import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBookBookmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H5C2.794,0,1,1.794,1,4V20c0,2.206,1.794,4,4,4H23V2.5c0-1.378-1.122-2.5-2.5-2.5ZM4,4c0-.552,.448-1,1-1h2v13h-2c-.347,0-.678,.058-1,.142V4ZM20,21H5c-.551,0-1-.449-1-1s.449-1,1-1h15v2Zm0-5H10V3h3V11l2.5-2.5,2.5,2.5V3h2v13Z"/></svg>

);
