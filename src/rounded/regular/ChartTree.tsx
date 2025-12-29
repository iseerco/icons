import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.736,16.4A5.009,5.009,0,0,0,17,13H13V11.916a6,6,0,1,0-2,0V13H7a5.009,5.009,0,0,0-4.736,3.4,4,4,0,1,0,2.447-.334A3,3,0,0,1,7,15h4v1.127a4,4,0,1,0,2,0V15h4a3,3,0,0,1,2.289,1.063,4,4,0,1,0,2.447.334ZM8,6a4,4,0,1,1,4,4A4,4,0,0,1,8,6ZM6,20a2,2,0,1,1-2-2A2,2,0,0,1,6,20Zm8,0a2,2,0,1,1-2-2A2,2,0,0,1,14,20Zm6,2a2,2,0,1,1,2-2A2,2,0,0,1,20,22Z"/></svg>

);
