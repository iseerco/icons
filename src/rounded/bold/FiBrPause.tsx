import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPause = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,0A4,4,0,0,0,3,4V20a4,4,0,0,0,8,0V4A4,4,0,0,0,7,0ZM8,20a1,1,0,0,1-2,0V4A1,1,0,0,1,8,4Z"/><path d="M17,0a4,4,0,0,0-4,4V20a4,4,0,0,0,8,0V4A4,4,0,0,0,17,0Zm1,20a1,1,0,0,1-2,0V4a1,1,0,0,1,2,0Z"/></svg>

);
