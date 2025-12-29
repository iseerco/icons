import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GolfClub = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.018.018,20.01,11.98,6.174,9.067A5.121,5.121,0,0,0,0,14.077v4.8A5.125,5.125,0,0,0,5.119,24h6.9a9.518,9.518,0,0,0,8.715-5.687A9.335,9.335,0,0,0,21.4,15.8L23.99.349ZM10.771,20.462,3.792,18.978l.416-1.956,6.979,1.484Zm4.518-3.22L4.762,15.024l.412-1.957L15.7,15.285Z"/></svg>

);
