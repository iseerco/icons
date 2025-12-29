import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTrademark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,6.5c0,.83-.67,1.5-1.5,1.5h-2.5v9.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5V8H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H9.5c.83,0,1.5,.67,1.5,1.5Zm10.63-1.5c-.88,0-1.69,.48-2.1,1.28l-1.52,2.95-1.53-2.96c-.41-.78-1.22-1.27-2.1-1.27-1.31,0-2.37,1.06-2.37,2.37v10.13c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-7.54l1.67,3.23c.26,.5,.77,.81,1.33,.81s1.08-.31,1.33-.81l1.67-3.23v7.54c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5V7.37c0-1.31-1.06-2.37-2.37-2.37Z"/></svg>

);
