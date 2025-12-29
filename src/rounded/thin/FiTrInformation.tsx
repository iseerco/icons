import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrInformation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,1c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm6.5,22h-4.5v-14.5c0-2.481-2.019-4.5-4.5-4.5-.276,0-.5.224-.5.5s.224.5.5.5c1.93,0,3.5,1.57,3.5,3.5v14.5h-4.5c-.276,0-.5.224-.5.5s.224.5.5.5h10c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Z"/></svg>

);
