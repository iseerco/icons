import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StepForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0v10.793L3-.009v24.018l16-10.802v10.793h2V0h-2ZM5,20.245V3.755l12.213,8.245-12.213,8.245Z"/></svg>

);
