import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,6.5A1.5,1.5,0,1,1,12,5,1.5,1.5,0,0,1,13.5,6.5ZM24,12A12,12,0,1,0,12,24H24Zm-2,0V22H12A10,10,0,1,1,22,12Zm-8,0a2,2,0,0,0-2-2H10v2h2v7h2Z"/></svg>

);
