import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPeoplePants = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.5,5c1.38,0,2.5-1.12,2.5-2.5S6.88,0,5.5,0,3,1.12,3,2.5s1.12,2.5,2.5,2.5Zm0-4c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm2,5H3.5c-1.38,0-2.5,1.12-2.5,2.5v8.5H3v7h1v-7h3v7h1v-7h2V8.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,10H2v-7.5c0-.83,.67-1.5,1.5-1.5H7.5c.83,0,1.5,.67,1.5,1.5v7.5ZM18.5,5c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm0-4c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5Zm4.5,7.5c0-1.38-1.12-2.5-2.5-2.5h-4c-1.38,0-2.5,1.12-2.5,2.5v8.5h2v7h1v-7h3v7h1v-7h2V8.5Zm-1,7.5h-7v-7.5c0-.83,.67-1.5,1.5-1.5h4c.83,0,1.5,.67,1.5,1.5v7.5Z"/></svg>

);
