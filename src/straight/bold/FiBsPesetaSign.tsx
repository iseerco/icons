import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPesetaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,7.5h-2.13C20.16,3.25,16.45,0,12,0H6.5c-1.93,0-3.5,1.57-3.5,3.5V7.5H1v3H3v13.5h3v-6h6c4.45,0,8.16-3.25,8.87-7.5h2.13v-3ZM6,3.5c0-.28,.22-.5,.5-.5h5.5c2.79,0,5.14,1.91,5.81,4.5H6V3.5Zm6,11.5H6v-4.5h11.81c-.67,2.59-3.02,4.5-5.81,4.5Z"/></svg>

);
