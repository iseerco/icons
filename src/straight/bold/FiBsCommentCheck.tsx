import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,17a2.5,2.5,0,0,1-1.771-.732L5.453,13.074l2.094-2.148L10.5,13.8l5.948-5.868,2.108,2.136-6.293,6.207A2.48,2.48,0,0,1,10.5,17ZM24,24H12A12,12,0,1,1,24,12ZM12,3a9,9,0,0,0,0,18h9V12A9.01,9.01,0,0,0,12,3Z"/></svg>

);
