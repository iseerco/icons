import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PaperclipVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-3.86,0-7-3.14-7-7V5C5,2.24,7.24,0,10,0s5,2.24,5,5v12c0,1.65-1.35,3-3,3s-3-1.35-3-3V6h2v11c0,.55,.45,1,1,1s1-.45,1-1V5c0-1.65-1.35-3-3-3s-3,1.35-3,3v12c0,2.76,2.24,5,5,5s5-2.24,5-5V3h2v14c0,3.86-3.14,7-7,7Z"/></svg>

);
