import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAuditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14,6v3H6v-3h8Zm9,9.449v5.551c0,1.657-1.343,3-3,3H1V0h17c1.657,0,3,1.343,3,3v8.619l2,3.83Zm-7,5.551V3H4v18h12Z"/>
</svg>

);
