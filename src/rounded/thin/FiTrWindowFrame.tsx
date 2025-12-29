import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrWindowFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,23h-1.5V4.5c0-2.481-2.019-4.5-4.5-4.5H6.5C4.019,0,2,2.019,2,4.5v18.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5h23c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-2.5,0h-8.5v-10h8.5v10Zm0-18.5v7.5h-8.5V1h5c1.93,0,3.5,1.57,3.5,3.5ZM6.5,1h5v11H3v-7.5c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,12h8.5v10H3v-10Z"/>
</svg>

);
