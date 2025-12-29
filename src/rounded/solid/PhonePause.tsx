import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhonePause = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,7V1a1,1,0,0,1,2,0V7A1,1,0,0,1,20,7ZM17,8a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V7A1,1,0,0,0,17,8Zm6.094,8.738c-.03-.031-2.437-1.883-2.437-1.883a3.1,3.1,0,0,0-4.283.007l-1.9,1.606A12.781,12.781,0,0,1,7.537,9.523l1.6-1.9a3.1,3.1,0,0,0,.005-4.28S7.292.94,7.26.909A3.08,3.08,0,0,0,2.933.862l-1.149,1c-7.721,8.209,12.2,28.139,20.4,20.3l.912-1.05A3.1,3.1,0,0,0,23.094,16.739Z"/></svg>

);
