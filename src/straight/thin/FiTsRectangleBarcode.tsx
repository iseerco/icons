import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRectangleBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22H0V4.5c0-1.378,1.121-2.5,2.5-2.5H21.5c1.379,0,2.5,1.122,2.5,2.5V22ZM1,21H23V4.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V21ZM5,6h-1v12h1V6Zm10,0h-1v12h1V6Zm-6,0h-2v12h2V6Zm3,0h-2v12h2V6Zm8,0h-2v12h2V6Zm-3,0h-1v12h1V6Z"/></svg>

);
