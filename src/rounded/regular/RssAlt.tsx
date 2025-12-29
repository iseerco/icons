import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RssAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3.5,17c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm0,5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Zm20.5,1c0,.552-.448,1-1,1s-1-.448-1-1C22,11.42,12.58,2,1,2c-.552,0-1-.448-1-1S.448,0,1,0c12.682,0,23,10.318,23,23Zm-9,0c0,.552-.448,1-1,1s-1-.448-1-1c0-6.617-5.383-12-12-12-.552,0-1-.448-1-1s.448-1,1-1c7.72,0,14,6.28,14,14Z"/></svg>

);
