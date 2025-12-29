import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowLeftFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.29,11.5H20v1H1.29l5.35,5.35-.71,.71L.44,13.06c-.58-.58-.58-1.54,0-2.12L5.94,5.44l.71,.71L1.29,11.5ZM23,0V24h1V0h-1Z"/></svg>

);
