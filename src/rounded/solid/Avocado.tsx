import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Avocado = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,16c.074,2.641-4.074,2.641-4,0C10.029,10.7,13.972,10.7,14,16Zm8-1.182C22,19.881,17.514,24,12,24S2,19.881,2,14.818C2,5.23,8.606,0,12,0a5.762,5.762,0,0,1,5.589,4.355C18.494,8.118,22.376,10.707,22,14.818ZM16,16c.094-7.959-8.094-7.958-8,0C8.041,21.3,15.96,21.3,16,16Z"/></svg>

);
