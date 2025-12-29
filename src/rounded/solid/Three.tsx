import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Three = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.893,9.82c1.281-1.008,2.107-2.568,2.107-4.32,0-3.033-2.468-5.5-5.5-5.5H5c-.552,0-1,.448-1,1s.448,1,1,1h7.5c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5H7c-.552,0-1,.448-1,1s.448,1,1,1h5.5c3.032,0,5.5,2.467,5.5,5.5s-2.468,5.5-5.5,5.5H5c-.552,0-1,.448-1,1s.448,1,1,1h7.5c4.136,0,7.5-3.364,7.5-7.5,0-2.914-1.674-5.439-4.107-6.68Z"/></svg>

);
