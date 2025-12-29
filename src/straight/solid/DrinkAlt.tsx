import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DrinkAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.883,2l-.251,2H12.616l.5-4H20V2ZM2.661,5.122a2.925,2.925,0,0,0-.6,2.434L2.362,10h9.5l.752-6H5A2.986,2.986,0,0,0,2.661,5.122Zm18.68,0A2.985,2.985,0,0,0,19,4H14.632l-.752,6h7.753l.294-2.347A2.982,2.982,0,0,0,21.341,5.125ZM12.626,20H10.61l1-8h-9l1.5,12H19.883l1.5-12H13.629Z"/></svg>

);
