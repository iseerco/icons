import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,7.25A1.75,1.75,0,1,1,12.25,5.5,1.751,1.751,0,0,1,14,7.25ZM24,12A12,12,0,1,0,12,24H24Zm-3,0v9H12a9,9,0,1,1,9-9Zm-7,.5A2.5,2.5,0,0,0,11.5,10H9v3h2v5h3Z"/></svg>

);
