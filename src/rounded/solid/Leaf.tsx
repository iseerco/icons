import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Leaf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.119.872A2.985,2.985,0,0,0,20.714.015C17.921.285,8.528,1.448,4.9,5.072a9.931,9.931,0,0,0-.671,13.281l11.06-11.06a1,1,0,0,1,1.414,1.414L5.647,19.767A9.929,9.929,0,0,0,18.928,19.1c3.676-3.677,4.8-13.041,5.059-15.823A2.987,2.987,0,0,0,23.119.872ZM4.9,19.1q.358.357.743.671l-3.94,3.94A1,1,0,0,1,.293,22.293l3.94-3.94Q4.547,18.737,4.9,19.1Z"/></svg>

);
