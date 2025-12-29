import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>04-Diagram</title><path d="M22,18.184V16a3,3,0,0,0-3-3H13V9.9a5,5,0,1,0-2,0V13H5a3,3,0,0,0-3,3v2.184a3,3,0,1,0,2,0V16a1,1,0,0,1,1-1h6v3.184a3,3,0,1,0,2,0V15h6a1,1,0,0,1,1,1v2.184a3,3,0,1,0,2,0Z"/></svg>

);
