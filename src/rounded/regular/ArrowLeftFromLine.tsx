import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowLeftFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,1V23c0,.55-.45,1-1,1s-1-.45-1-1V1c0-.55,.45-1,1-1s1,.45,1,1Zm-5,10H2.58L6.72,6.69c.38-.4,.37-1.03-.03-1.41-.4-.38-1.03-.37-1.41,.03L.88,9.88c-.57,.57-.88,1.32-.88,2.12s.31,1.55,.87,2.11l4.41,4.59c.2,.2,.46,.31,.72,.31s.5-.09,.69-.28c.4-.38,.41-1.02,.03-1.41L2.58,13H19c.55,0,1-.45,1-1s-.45-1-1-1Z"/></svg>

);
