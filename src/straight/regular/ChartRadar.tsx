import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartRadar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.01,13l-2.28-3.99c.17-.3,.27-.64,.27-1.01,0-1.1-.9-2-2-2s-2,.9-2,2c0,.37,.1,.71,.27,1.01l-2.28,3.99c-1.1,0-1.99,.9-1.99,2s.9,2,2,2c.74,0,1.39-.4,1.73-1h4.54c.35,.6,.99,1,1.73,1,1.1,0,2-.9,2-2s-.89-1.99-1.99-2Zm-6.28,.99l2.27-3.98,2.27,3.98s0,0,0,0h-4.54s0,0,0,0Z"/><path d="M18.01,23H5.96L-.01,12,5.96,1h12.05l5.98,11-5.98,11Zm-10.86-2h9.68l4.89-9L16.82,3H7.15L2.26,12l4.89,9Z"/></svg>

);
