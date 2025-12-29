import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCactus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,15.5v-3m-7,11.5H7v-9h-2.5c-2.481,0-4.5-2.019-4.5-4.5v-3c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5v2.5h2v-5c0-2.757,2.243-5,5-5s5,2.243,5,5v10h2v-2.5c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5v3c0,2.481-2.019,4.5-4.5,4.5h-2.5v4Zm-9-1h8v-4h3.5c1.93,0,3.5-1.57,3.5-3.5v-3c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v3.5h-4V5c0-2.206-1.794-4-4-4s-4,1.794-4,4v6h-4v-3.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v3c0,1.93,1.57,3.5,3.5,3.5h3.5v9Zm5-12c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-2,7c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm.25-14c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>

);
