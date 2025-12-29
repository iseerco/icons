import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HatBirthday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.7,24,13.475,5.6a3,3,0,1,0-2.95,0L.3,24ZM10.4,22H8.235l6.036-10.853,1.138,2.047Zm6.143-6.76,1.135,2.044L14.986,22H12.7ZM5.946,22H3.7L12,7.059l1.127,2.029Zm11.343,0,1.527-2.673L20.3,22Z"/></svg>

);
