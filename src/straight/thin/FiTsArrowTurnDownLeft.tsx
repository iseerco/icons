import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowTurnDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,2V12.5c0,.83-.67,1.5-1.5,1.5H1.24L7.37,7.34l-.74-.68L.47,13.37c-.62,.62-.62,1.64-.01,2.25l6.18,6.72,.74-.68L1.24,15H21.5c1.38,0,2.5-1.12,2.5-2.5V2h-1Z"/></svg>

);
