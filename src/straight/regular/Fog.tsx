import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fog = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,24H5V22h9Zm5-2H16v2h3Zm0-4H10v2h9ZM8,18H5v2H8Zm6-4H5v2h9Zm5,0H16v2h3ZM17.441,5.059A8,8,0,0,0,2.265,10.05a5.5,5.5,0,0,0,.773,9.367V16.985a3.5,3.5,0,0,1,.873-5.6l.8-.408-.319-.838A6,6,0,0,1,10,2a6.035,6.035,0,0,1,5.752,4.289l.206.691L16.679,7A5.5,5.5,0,0,1,21,15.658V18.5A7.5,7.5,0,0,0,17.441,5.059Z"/></svg>

);
