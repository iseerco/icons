import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PaperclipVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,3c-.55,0-1,.45-1,1v13c0,2.76-2.24,5-5,5s-5-2.24-5-5V5c0-1.65,1.35-3,3-3s3,1.35,3,3v12c0,.55-.45,1-1,1s-1-.45-1-1V6c0-.55-.45-1-1-1s-1,.45-1,1v11c0,1.65,1.35,3,3,3s3-1.35,3-3V5c0-2.76-2.24-5-5-5S5,2.24,5,5v12c0,3.86,3.14,7,7,7s7-3.14,7-7V4c0-.55-.45-1-1-1Z"/></svg>

);
