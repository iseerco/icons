import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPicpeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,1H5.5C2.47,1,0,3.47,0,6.5v11c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V6.5c0-3.03-2.47-5.5-5.5-5.5ZM8.84,20c.57-1.2,1.79-2,3.16-2s2.59,.8,3.16,2h-6.32Zm12.16-2.5c0,1.38-1.12,2.5-2.5,2.5h-.17c-.69-2.91-3.32-5-6.33-5s-5.64,2.09-6.33,5h-.17c-1.38,0-2.5-1.12-2.5-2.5V6.5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5v11ZM12,5c-2.48,0-4.5,2.02-4.5,4.5s2.02,4.5,4.5,4.5,4.5-2.02,4.5-4.5-2.02-4.5-4.5-4.5Zm0,6c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Z"/></svg>

);
