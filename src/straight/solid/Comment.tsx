import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Comment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.309V24H12.018A12,12,0,1,1,24,11.246ZM13,7H7V9h6Zm4,4H7v2H17Zm0,4H7v2H17Z"/></svg>

);
