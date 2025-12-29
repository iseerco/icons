import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFlorinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.12,1.93l-3.89,8.57h5.77v1h-6.22l-4.99,10.98c-.42,.92-1.35,1.52-2.36,1.52H0v-1H5.43c.62,0,1.19-.37,1.45-.93l4.8-10.57H6v-1h6.13L16.21,1.52c.42-.92,1.35-1.52,2.36-1.52h5.43V1h-5.43c-.62,0-1.19,.37-1.45,.93Z"/></svg>

);
