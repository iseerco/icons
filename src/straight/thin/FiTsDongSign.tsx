import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDongSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,23v1H2v-1H22ZM5,14c0-3.31,2.69-6,6-6,2.08,0,3.92,1.07,5,2.69V4h-5v-1h5V0h1V3h3v1h-3V20h-1v-2.69c-1.08,1.62-2.92,2.69-5,2.69-3.31,0-6-2.69-6-6Zm1,0c0,2.76,2.24,5,5,5s5-2.24,5-5-2.24-5-5-5-5,2.24-5,5Z"/></svg>

);
