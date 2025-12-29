import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAcorn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,7.75c0-3.17-2.58-5.75-5.75-5.75h-4.75V0h-1V2H6.75C3.58,2,1,4.58,1,7.75v1.25H3v4.88c0,6.74,8.47,9.9,8.83,10.03l.17,.06,.17-.06c.36-.13,8.83-3.29,8.83-10.03v-4.88h2v-1.25Zm-3,6.13c0,5.55-6.82,8.55-8,9.03-1.18-.48-8-3.47-8-9.03v-4.88H20v4.88Zm2-5.88H2v-.25c0-2.62,2.13-4.75,4.75-4.75h10.5c2.62,0,4.75,2.13,4.75,4.75v.25Z"/></svg>

);
