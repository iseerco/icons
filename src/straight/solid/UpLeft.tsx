import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UpLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.17,23.24L5.97,13.05,1,17.97V4.01c0-.8,.32-1.56,.88-2.13,.57-.57,1.32-.88,2.12-.88h13.98s-4.94,4.97-4.94,4.97l10.19,10.19-7.07,7.07Z"/></svg>

);
