import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,10V5.936A5.381,5.381,0,0,0,18.087.792a23.809,23.809,0,0,0-12.174,0A5.381,5.381,0,0,0,2,5.936V10a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2v1.5a5.493,5.493,0,0,0,2,4.24V22a2,2,0,0,0,4,0h8a2,2,0,0,0,4,0V20.74a5.493,5.493,0,0,0,2-4.24V15a2,2,0,0,0,2-2V12A2,2,0,0,0,22,10Zm-8.5,2V6H19v6ZM5,12V6h5.5v6Zm2.5,7A2.5,2.5,0,0,1,5,16.5V15H7v.5a1.5,1.5,0,0,0,3,0V15h4v.5a1.5,1.5,0,0,0,3,0V15h2v1.5A2.5,2.5,0,0,1,16.5,19Z"/></svg>

);
