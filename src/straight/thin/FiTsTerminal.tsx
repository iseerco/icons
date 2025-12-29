import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTerminal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.85,1.92L10.94,12,.85,22.08l-.71-.71L9.52,12,.15,2.62l.71-.71ZM11,21v1h13v-1H11Z"/></svg>

);
