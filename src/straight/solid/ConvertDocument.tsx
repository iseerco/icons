import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ConvertDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,8v15H7v-8h6.085l-1.792,1.793,1.414,1.414,2.8-2.802c.773-.774.773-2.036,0-2.812l-2.799-2.801-1.414,1.414,1.802,1.793h-6.095V4c0-1.657,1.343-3,3-3h7v7h7ZM5,4c0-1.13.391-2.162,1.026-3h-3.026C1.346,1,0,2.346,0,4v19h5V4Zm14-2.414v4.414h4.414l-4.414-4.414Z"/>
</svg>

);
