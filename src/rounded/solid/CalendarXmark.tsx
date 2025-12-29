import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,7v1H0v-1C0,4.243,2.243,2,5,2h1v-1c0-.552.448-1,1-1s1,.448,1,1v1h8v-1c0-.552.448-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5Zm0,3v9c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-9h24Zm-10.586,7l2.293-2.293c.391-.391.391-1.023,0-1.414s-1.023-.391-1.414,0l-2.293,2.293-2.293-2.293c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l2.293,2.293-2.293,2.293c-.391.391-.391,1.023,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l2.293-2.293,2.293,2.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414l-2.293-2.293Z"/></svg>

);
