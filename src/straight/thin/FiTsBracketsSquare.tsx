import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBracketsSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,0h3.5V1H2.5c-.83,0-1.5,.67-1.5,1.5V21.5c0,.83,.67,1.5,1.5,1.5h3.5v1H2.5c-1.38,0-2.5-1.12-2.5-2.5V2.5C0,1.12,1.12,0,2.5,0ZM21.5,0h-3.5V1h3.5c.83,0,1.5,.67,1.5,1.5V21.5c0,.83-.67,1.5-1.5,1.5h-3.5v1h3.5c1.38,0,2.5-1.12,2.5-2.5V2.5c0-1.38-1.12-2.5-2.5-2.5Z"/></svg>

);
