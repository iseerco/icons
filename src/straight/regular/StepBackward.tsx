import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StepBackward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21-.009L5,10.793V0h-2v24h2v-10.793l16,10.802V-.009Zm-2,20.254L6.787,12,19,3.755v16.49Z"/></svg>

);
