import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsScreencast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4.5v17.5h-10v-1h9V4.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v3.5H0v-3.5c0-1.378,1.122-2.5,2.5-2.5h19c1.378,0,2.5,1.122,2.5,2.5ZM1,20c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-1-5v1c3.309,0,6,2.691,6,6h1c0-3.86-3.14-7-7-7Zm.051-5v1c6.038,0,10.951,4.935,10.951,11h1C12.002,15.383,6.641,10,.051,10Z"/>
</svg>

);
