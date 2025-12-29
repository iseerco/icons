import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileWord = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,5.66L16.38,0H5C3.35,0,2,1.35,2,3V24s20,0,20,0V5.66ZM5,3H14v5h5v4H5V3ZM15.3,22h-2.27l-1.05-2.22-1.01,2.22h-2.31l-1.51-8h2.04l.96,4.97,1.83-4.18,1.83,4.17,.96-4.97h2.04l-1.51,8Z"/></svg>

);
