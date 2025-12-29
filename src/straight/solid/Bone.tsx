import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.04,4h0c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,1.03,.39,1.97,1.03,2.68l-6.37,6.37c-.71-.65-1.66-1.05-2.7-1.05-2.21,0-4,1.79-4,4s1.77,3.98,3.96,4h0c0,2.21,1.79,4,4,4s4-1.79,4-4c0-1.03-.39-1.97-1.03-2.68l6.37-6.37c.71,.65,1.66,1.05,2.7,1.05,2.21,0,4-1.79,4-4s-1.77-3.98-3.96-4Z"/></svg>

);
