import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileChartPie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.414,0H5c-1.654,0-3,1.346-3,3V24H22V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586V3.414ZM4,22V3c0-.551,.448-1,1-1H13v7h7v13H4ZM12,10c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,8c-1.654,0-3-1.346-3-3s1.346-3,3-3v3l2.757-1.182c.156,.363,.243,.762,.243,1.182,0,1.654-1.346,3-3,3Z"/></svg>

);
