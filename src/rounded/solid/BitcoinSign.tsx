import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BitcoinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.43,11.35c.97-.99,1.57-2.35,1.57-3.85,0-2.86-2.2-5.22-5-5.47V1c0-.55-.45-1-1-1s-1,.45-1,1v1h-2V1c0-.55-.45-1-1-1s-1,.45-1,1v1c-2.21,0-4,1.79-4,4v12c0,2.21,1.79,4,4,4v1c0,.55,.45,1,1,1s1-.45,1-1v-1h2v1c0,.55,.45,1,1,1s1-.45,1-1v-1h1.5c3.03,0,5.5-2.47,5.5-5.5,0-2.36-1.49-4.37-3.57-5.15ZM6,6c0-1.1,.9-2,2-2h5.5c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5H6V6Zm9.5,14h-7.5c-1.1,0-2-.9-2-2v-5H15.5c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5Z"/></svg>

);
