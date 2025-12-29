import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10v13H0V10H24ZM0,8V4C0,2.35,1.35,1,3,1H21c1.65,0,3,1.35,3,3v4H0Zm19-3.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5Zm-4,0c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5Zm-4,0c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5Z"/></svg>

);
