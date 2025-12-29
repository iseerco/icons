import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTemperatureUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,4H21v8H18V4H15.5L18.793.707a1,1,0,0,1,1.414,0Zm-14,9.439V6h-3v7.439a3,3,0,1,0,3,0Zm4.5-2.71A7.907,7.907,0,0,1,16,16,8,8,0,0,1,0,16a7.907,7.907,0,0,1,2-5.271V6.037a6,6,0,0,1,12,0ZM13,16a4.952,4.952,0,0,0-1.541-3.59L11,11.968V6.037a3,3,0,1,0-6,0v5.931l-.459.442A4.952,4.952,0,0,0,3,16a5,5,0,0,0,10,0Z"/></svg>

);
