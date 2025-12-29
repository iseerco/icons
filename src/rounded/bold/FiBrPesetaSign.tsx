import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPesetaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,7.5h-1.63C20.16,3.25,16.45,0,12,0h-3.5C5.47,0,3,2.47,3,5.5v2H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5h1.5v12c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-4.5h6c4.45,0,8.16-3.25,8.87-7.5h1.63c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5ZM6,5.5c0-1.38,1.12-2.5,2.5-2.5h3.5c2.79,0,5.14,1.91,5.81,4.5H6v-2Zm6,9.5H6v-4.5h11.81c-.67,2.59-3.02,4.5-5.81,4.5Z"/></svg>

);
