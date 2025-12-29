import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scalpel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.19,5.719l-9.027,9.027-4.044-3.774L19.281,1.81c1.078-1.078,2.831-1.078,3.909,0s1.078,2.831,0,3.909ZM0,21.091v1.909s2.809.009,3.04,0c3.602-.143,6.997-1.633,9.559-4.194l.192-.192.224-2.113-4.365-4.058L0,21.091Z"/></svg>

);
