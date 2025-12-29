import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsKipSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,13.5H7.43l13.15,10.5h-1.6L6,13.64v10.36h-1V13.5H2v-1h3V0h1V12.31L19.15,0h1.47L7.27,12.5h14.73v1Z"/></svg>

);
