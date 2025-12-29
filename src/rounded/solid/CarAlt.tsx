import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CarAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,11V8.5A1.5,1.5,0,0,1,1.5,7s.959,0,1,0A27.327,27.327,0,0,1,4.687,3.049,3.884,3.884,0,0,1,6.665,1.692c1.761-.856,8.909-.856,10.67,0a3.884,3.884,0,0,1,1.978,1.357A27.327,27.327,0,0,1,21.5,7c.041,0,1,0,1,0A1.5,1.5,0,0,1,24,8.5V11a90.636,90.636,0,0,0-12-1A90.636,90.636,0,0,0,0,11Zm24,2.023V15a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V13.027A90.835,90.835,0,0,1,12,12,90.835,90.835,0,0,1,24,13.027ZM6,16a1,1,0,0,0-2,0A1,1,0,0,0,6,16Zm14,0a1,1,0,0,0-2,0A1,1,0,0,0,20,16ZM6.942,21c.587,3.954-5.472,3.952-4.884,0Zm15,0c.587,3.954-5.472,3.952-4.884,0Z"/></svg>

);
