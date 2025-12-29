import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Columns3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,2H3c-1.654,0-3,1.346-3,3v17h24V5c0-1.654-1.346-3-3-3Zm-6,2v16h-6V4h6Zm-13,1c0-.551.449-1,1-1h4v16H2V5Zm20,15h-5V4h4c.551,0,1,.449,1,1v15Z"/></svg>

);
