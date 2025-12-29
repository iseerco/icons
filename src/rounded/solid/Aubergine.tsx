import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Aubergine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.24,4.915a8.325,8.325,0,0,0,3.315-1.083,1,1,0,0,0-1.1-1.668A6.508,6.508,0,0,1,20,2.931V1a1,1,0,0,0-2,0V2.931a6.526,6.526,0,0,1-2.451-.767,1,1,0,0,0-1.1,1.668A8.343,8.343,0,0,0,17.794,4.92c-2.021.523-3.008,1.888-3.832,3.823C13,11,11,11,7,11c-3.86,0-7,2.641-7,6.5S3.14,24,7,24c10.645,0,17-7.5,17-14.257A5,5,0,0,0,20.24,4.915ZM19,8.5a1,1,0,0,1-1-1V4.95a10.126,10.126,0,0,0,2,0V7.5A1,1,0,0,1,19,8.5Z"/></svg>

);
