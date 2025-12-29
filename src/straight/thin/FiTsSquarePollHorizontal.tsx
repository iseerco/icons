import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquarePollHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.12,0,0,1.12,0,2.5V24H24V2.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5V23ZM8,13h11v1H8v-1Zm3,4h8v1H11v-1ZM5,9h14v1H5v-1ZM15,5h4v1h-4v-1Z"/></svg>

);
