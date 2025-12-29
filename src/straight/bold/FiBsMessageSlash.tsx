import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMessageSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.121,20h.879V4.5c0-1.93-1.57-3.5-3.5-3.5H4.5c-.404,0-.801.071-1.175.204L2.16.039.039,2.16l21.801,21.801,2.121-2.121-1.84-1.84Zm-2.621-16c.275,0,.5.225.5.5v12.5h-.879L6.121,4h13.379Zm-5.549,14.9l2.13,2.13-2.461,2.035c-.448.399-1.024.601-1.606.601-.595,0-1.196-.21-1.675-.636l-3.598-3.03H1V5.949l3,3v8.051h3.836l4.167,3.511,1.947-1.61Z"/></svg>

);
