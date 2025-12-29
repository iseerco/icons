import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlorinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.61,3.29l-2.82,6.21h4.22v3h-5.58l-4.3,9.45c-.56,1.25-1.82,2.05-3.19,2.05H0v-3H5.94c.2,0,.37-.12,.45-.29l3.73-8.21H6v-3h5.49l3.39-7.45c.56-1.25,1.82-2.05,3.19-2.05h5.94V3h-5.94c-.2,0-.37,.12-.45,.29Z"/></svg>

);
