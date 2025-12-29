import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Piano = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,16v-7.352C0,3.879,3.879,0,8.648,0c3.989,0,7.375,2.72,8.237,6.615l.23,1.042c.233,1.055,1.187,1.82,2.267,1.82,2.546,0,4.618,2.072,4.618,4.618v1.905H0Zm19,2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2h-2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2h-2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2h-2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2H0v1.5c0,2.485,2.015,4.5,4.5,4.5h15c2.485,0,4.5-2.015,4.5-4.5v-1.5h-5Z"/>
</svg>

);
