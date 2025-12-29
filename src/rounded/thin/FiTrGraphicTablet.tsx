import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrGraphicTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.5,4H6.5c-2.481,0-4.5,2.019-4.5,4.5v3H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1.5v3c0,2.481,2.019,4.5,4.5,4.5h13c2.481,0,4.5-2.019,4.5-4.5v-7c0-2.481-2.019-4.5-4.5-4.5ZM3,15.5v-3h1.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1.5v-3c0-1.93,1.57-3.5,3.5-3.5h.5v14h-.5c-1.93,0-3.5-1.57-3.5-3.5Zm20,0c0,1.93-1.57,3.5-3.5,3.5H8V5h11.5c1.93,0,3.5,1.57,3.5,3.5v7Z"/>
</svg>

);
