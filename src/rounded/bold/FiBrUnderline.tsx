import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrUnderline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,18.989a9.01,9.01,0,0,0,9-9V1.5a1.5,1.5,0,0,0-3,0V9.989a6,6,0,0,1-12,0V1.5a1.5,1.5,0,0,0-3,0V9.989A9.01,9.01,0,0,0,12,18.989Z"/><path d="M22.544,21H1.5a1.5,1.5,0,0,0,0,3H22.544a1.5,1.5,0,0,0,0-3Z"/></svg>

);
