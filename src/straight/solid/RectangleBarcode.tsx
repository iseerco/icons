import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3ZM6,18h-2V6h2v12Zm4,0h-2V6h2v12Zm4,0h-3V6h3v12Zm6,0h-2V6h2v12Zm-4,0h-1V6h1v12Z"/></svg>

);
