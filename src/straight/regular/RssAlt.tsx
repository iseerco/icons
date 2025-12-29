import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RssAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3.5,24c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5Zm0-5c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5,1.5-.673,1.5-1.5-.673-1.5-1.5-1.5ZM0,0v2c12.131,0,22,9.869,22,22h2C24,10.767,13.233,0,0,0Zm0,9v2c7.168,0,13,5.832,13,13h2c0-8.271-6.729-15-15-15Z"/></svg>

);
