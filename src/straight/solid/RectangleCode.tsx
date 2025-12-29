import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3ZM10.294,15.291l-1.414,1.414-3.298-3.299c-.775-.775-.775-2.037,0-2.812l3.298-3.298,1.414,1.414-3.298,3.298,3.298,3.283Zm8.124-1.884l-3.299,3.298-1.414-1.414,3.299-3.299-3.299-3.283,1.414-1.414,3.299,3.298c.376,.375,.583,.875,.583,1.406s-.207,1.031-.583,1.407Z"/></svg>

);
