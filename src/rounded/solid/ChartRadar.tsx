import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartRadar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.27,14h-4.54s0,0,0,0l2.27-3.98,2.27,3.98s0,0,0,0Zm9.03,.51l-3.48,6c-.89,1.54-2.55,2.49-4.32,2.49h-7.01c-1.78,0-3.43-.95-4.32-2.49L.68,14.51c-.9-1.55-.9-3.47,0-5.02L4.16,3.49c.89-1.54,2.55-2.49,4.32-2.49h7.01c1.78,0,3.43,.95,4.32,2.49l3.48,6c.9,1.55,.9,3.47,0,5.02Zm-5.3,.49c0-1.1-.89-1.99-1.99-2l-2.28-3.99c.17-.3,.27-.64,.27-1.01,0-1.1-.9-2-2-2s-2,.9-2,2c0,.37,.1,.71,.27,1.01l-2.28,3.99c-1.1,0-1.99,.9-1.99,2s.9,2,2,2c.74,0,1.39-.4,1.73-1h4.54c.35,.6,.99,1,1.73,1,1.1,0,2-.9,2-2Z"/></svg>

);
