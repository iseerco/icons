import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBoxUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,16h10v3H9v-3ZM24,3.5V24H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5V21H21V3.5Zm-5.207,2.793l-1.793,1.752-1.793-1.752c-.391-.391-1.024-.391-1.414,0l-2.77,2.707h1.977v5h3v-5h2v5h3v-5h1.977l-2.77-2.707c-.391-.391-1.024-.391-1.414,0Z"/></svg>

);
