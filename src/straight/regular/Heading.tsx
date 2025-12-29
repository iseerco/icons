import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Heading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,2v20h2v2h-6v-2h2v-9.5H4v9.5h2v2H0v-2h2V2H0V0h6v2h-2v8.5h16V2h-2V0h6v2h-2Z"/></svg>

);
