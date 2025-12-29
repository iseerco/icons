import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Microscope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,13.5c0-4.687-3.813-8.5-8.5-8.5h-2.5c0-1.302-.839-2.402-2-2.816v-1.184c0-.552-.447-1-1-1s-1,.448-1,1v1.184c-1.161.414-2,1.514-2,2.816v8c0,.552.447,1,1,1h4c.553,0,1-.448,1-1v-6h2.5c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5h-4.5v-2h4c.553,0,1-.448,1-1s-.447-1-1-1H5c-.553,0-1,.448-1,1s.447,1,1,1h4v2H2c-.553,0-1,.448-1,1s.447,1,1,1h1v1c0,.552.447,1,1,1s1-.448,1-1v-1h10v1c0,.552.447,1,1,1s1-.448,1-1v-1.141c3.973-.712,7-4.185,7-8.359Z"/></svg>

);
