import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Password = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,16h6v2H9Zm4.793-9.207L12,8.586,10.207,6.793,8.793,8.207,10.586,10,8.793,11.793l1.414,1.414L12,11.414l1.793,1.793,1.414-1.414L13.414,10l1.793-1.793ZM17,18h6V16H17Zm6.207-9.793L21.793,6.793,20,8.586,18.207,6.793,16.793,8.207,18.586,10l-1.793,1.793,1.414,1.414L20,11.414l1.793,1.793,1.414-1.414L21.414,10ZM1,18H7V16H1ZM5.793,6.793,4,8.586,2.207,6.793.793,8.207,2.586,10,.793,11.793l1.414,1.414L4,11.414l1.793,1.793,1.414-1.414L5.414,10,7.207,8.207Z"/></svg>

);
