import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18.184V18a5.006,5.006,0,0,0-5-5H13V11.91a6,6,0,1,0-2,0V13H7a5.006,5.006,0,0,0-5,5v.184a3,3,0,1,0,2,0V18a3,3,0,0,1,3-3h4v3.184a3,3,0,1,0,2,0V15h4a3,3,0,0,1,3,3v.184a3,3,0,1,0,2,0Z"/></svg>

);
