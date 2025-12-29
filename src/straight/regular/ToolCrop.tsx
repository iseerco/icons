import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToolCrop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M24,18H20V7a3,3,0,0,0-3-3H6V0H4V4H0V6H4V17a3,3,0,0,0,3,3H18v4h2V20h4ZM7,18a1,1,0,0,1-1-1V6H17a1,1,0,0,1,1,1V18Z"/></g></svg>

);
