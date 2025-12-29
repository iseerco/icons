import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0c-.828,0-1.5,.671-1.5,1.5V10H5V1.5c-.033-1.972-2.967-1.971-3,0V22.5c.033,1.972,2.967,1.971,3,0V13h14v9.5c.034,1.972,2.967,1.971,3,0V1.5c0-.829-.672-1.5-1.5-1.5Z"/></svg>

);
