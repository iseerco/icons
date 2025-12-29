import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PicpeopleFilled = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2H5C2.24,2,0,4.24,0,7v10c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V7c0-2.76-2.24-5-5-5Zm3,15c0,1.65-1.35,3-3,3h-1.35c-.82-2.33-3.04-4-5.65-4s-4.83,1.67-5.65,4h-1.35c-1.65,0-3-1.35-3-3V7c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v10Zm-6-7c0,2.21-1.79,4-4,4s-4-1.79-4-4,1.79-4,4-4,4,1.79,4,4Z"/></svg>

);
