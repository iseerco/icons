import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.119,16.705l-1.414-1.414,3.299-3.299-3.299-3.283,1.414-1.414,3.299,3.298c.376,.375,.583,.875,.583,1.406s-.207,1.031-.583,1.407l-3.299,3.298Zm-4.824-1.414l-3.299-3.283,3.299-3.298-1.414-1.414-3.299,3.298c-.376,.375-.583,.875-.583,1.407s.207,1.031,.583,1.406l3.299,3.299,1.414-1.414ZM24,3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V24H24V3ZM2,3c0-.551,.448-1,1-1H21c.552,0,1,.449,1,1V22H2V3Z"/></svg>

);
