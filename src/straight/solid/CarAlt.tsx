import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CarAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,11.033V8H1.636A30.078,30.078,0,0,1,4.687,3.049,3.884,3.884,0,0,1,6.665,1.692c1.761-.856,8.909-.856,10.67,0a3.884,3.884,0,0,1,1.978,1.357A30.078,30.078,0,0,1,22.364,8H24v3.033A88.7,88.7,0,0,0,12,10,88.7,88.7,0,0,0,0,11.033Zm24,2.024V19H0V13.057A89.079,89.079,0,0,1,12,12,89.079,89.079,0,0,1,24,13.057ZM6,16a1,1,0,0,0-2,0A1,1,0,0,0,6,16Zm14,0a1,1,0,0,0-2,0A1,1,0,0,0,20,16ZM3,21v3H7V21Zm18,0v3H17V21Z"/></svg>

);
