import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRectangleBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22H0V5.5c0-1.93,1.57-3.5,3.5-3.5H20.5c1.93,0,3.5,1.57,3.5,3.5V22ZM3,19H21V5.5c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5,.224-.5,.5v13.5ZM9,7H5v10h4V7Zm7,0h-3v10h3V7Zm3,0h-2v10h2V7Zm-7,0h-2v10h2V7Z"/></svg>

);
