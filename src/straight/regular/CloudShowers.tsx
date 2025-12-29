import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudShowers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,24H13V17h2Zm-4-9H9v7h2ZM7,17H5v7H7Zm12-2H17v7h2ZM17.441,5.059A8,8,0,0,0,2.265,10.05,5.5,5.5,0,0,0,3,19.4V16.946a3.5,3.5,0,0,1,.911-5.566l.8-.408-.319-.838A6,6,0,0,1,10,2a6.035,6.035,0,0,1,5.752,4.289l.206.691L16.679,7A5.5,5.5,0,0,1,21,15.659V18.5A7.5,7.5,0,0,0,17.441,5.059Z"/></svg>

);
