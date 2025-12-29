import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNoPeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2H2.5C1.12,2,0,3.12,0,4.5v15c0,1.38,1.12,2.5,2.5,2.5H21.5c1.38,0,2.5-1.12,2.5-2.5V4.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,17.5c0,.83-.67,1.5-1.5,1.5H2.5c-.83,0-1.5-.67-1.5-1.5V4.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5v15Z"/></svg>

);
