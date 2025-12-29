import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPicpeopleFilled = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,1H5.5C2.47,1,0,3.47,0,6.5v11c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V6.5c0-3.03-2.47-5.5-5.5-5.5Zm2.5,16.5c0,1.38-1.12,2.5-2.5,2.5h-.85c-.82-2.33-3.04-4-5.65-4s-4.83,1.67-5.65,4h-.85c-1.38,0-2.5-1.12-2.5-2.5V6.5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5v11Zm-5-7.5c0,2.21-1.79,4-4,4s-4-1.79-4-4,1.79-4,4-4,4,1.79,4,4Z"/></svg>

);
