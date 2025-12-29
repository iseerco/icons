import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fax = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,13.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Zm1.5,6.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm5-5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm0,5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm6.5-15.91V24H0V7c0-1.65,1.35-3,3-3h2c1.65,0,3,1.35,3,3v1h2V3c0-1.65,1.35-3,3-3h6.91l4.09,4.09ZM6,7c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1v15H6V7Zm16,3H8v12h14V10Zm0-2v-3h-3V2h-6c-.55,0-1,.45-1,1v5h10Z"/></svg>

);
