import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DisplayMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,3H5C2.243,3,0,5.243,0,8v6c0,2.757,2.243,5,5,5h6v1h-3c-.552,0-1,.448-1,1s.448,1,1,1h8c.552,0,1-.448,1-1s-.448-1-1-1h-3v-1h6c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5Zm3,11c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v6Zm-6-3c0,.552-.448,1-1,1h-2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2h-2c-.552,0-1-.448-1-1s.448-1,1-1h2v-2c0-.552.448-1,1-1s1,.448,1,1v2h2c.552,0,1,.448,1,1Z"/>
</svg>

);
