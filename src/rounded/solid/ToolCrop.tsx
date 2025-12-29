import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToolCrop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,18H20V9a5.006,5.006,0,0,0-5-5H6V1A1,1,0,0,0,4,1V4H1A1,1,0,0,0,1,6H4v9a5.006,5.006,0,0,0,5,5h9v3a1,1,0,0,0,2,0V20h3a1,1,0,0,0,0-2Zm-5,0H9a3,3,0,0,1-3-3V6h9a3,3,0,0,1,3,3Z"/></svg>

);
