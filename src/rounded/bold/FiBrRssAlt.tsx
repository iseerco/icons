import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRssAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,21c0,1.657-1.343,3-3,3s-3-1.343-3-3,1.343-3,3-3,3,1.343,3,3ZM1.5,0C.671,0,0,.671,0,1.5s.671,1.5,1.5,1.5c10.752,0,19.5,8.748,19.5,19.5,0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5C24,10.093,13.907,0,1.5,0Zm0,9c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5c5.79,0,10.5,4.71,10.5,10.5,0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5c0-7.444-6.056-13.5-13.5-13.5Z"/></svg>

);
