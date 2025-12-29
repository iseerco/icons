import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CodeCommit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11h-5.08c-.488-3.387-3.401-6-6.92-6s-6.432,2.613-6.92,6H0v2H5.08c.488,3.387,3.401,6,6.92,6s6.432-2.613,6.92-6h5.08v-2Z"/></svg>

);
