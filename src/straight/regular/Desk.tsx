import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Desk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13,12v-2h6V2c0-1.103-.897-2-2-2H7c-1.103,0-2,.897-2,2V10h6v2H0v2H2v10h2V14H15v10h9V12H13ZM7,2h10v6H7V2Zm15,12v3h-5v-3h5Zm-5,8v-3h5v3h-5Z"/>
</svg>

);
