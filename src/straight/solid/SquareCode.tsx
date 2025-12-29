import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3ZM10.295,15.291l-1.414,1.414-3.299-3.299c-.376-.375-.583-.875-.583-1.406s.207-1.031,.583-1.407l3.299-3.298,1.414,1.414-3.299,3.298,3.299,3.283Zm8.123-1.884l-3.299,3.298-1.414-1.414,3.299-3.299-3.299-3.283,1.414-1.414,3.299,3.298c.376,.375,.583,.875,.583,1.406s-.207,1.031-.583,1.407Z"/></svg>

);
