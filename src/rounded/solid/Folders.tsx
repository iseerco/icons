import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Folders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.899,7H4v-1c0-2.757,2.243-5,5-5h2.056c.463,0,.927,.109,1.341,.316l3.156,1.578c.138,.069,.293,.105,.447,.105h3c2.414,0,4.434,1.721,4.899,4ZM4,9v5c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-5H4Zm15,12H5c-1.654,0-3-1.346-3-3V8c-.006-1.308-1.995-1.307-2,0v10c0,2.757,2.243,5,5,5h14c1.308-.005,1.307-1.995,0-2Z"/></svg>

);
