import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,19h-1V10.5c0-.28-.22-.5-.5-.5h-1.5v-1h1.5c.83,0,1.5,.67,1.5,1.5v8.5Zm-1-14c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm12-2.5c0-1.38-1.12-2.5-2.5-2.5H2.5C1.12,0,0,1.12,0,2.5V24H24V2.5ZM1,2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5V23H1V2.5Z"/></svg>

);
