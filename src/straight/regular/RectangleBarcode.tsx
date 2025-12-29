import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22H0V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3V22ZM2,20H22V5c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1v15ZM6,6h-2v12h2V6Zm4,0h-2v12h2V6Zm10,0h-2v12h2V6Zm-6,0h-3v12h3V6Z"/><polygon points="16 6 15 6 15 18 16 18 16 6 16 6"/></svg>

);
