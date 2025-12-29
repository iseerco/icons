import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const R = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.009,24l-5.329-9.325c3.075-.936,5.32-3.797,5.32-7.175,0-4.136-3.364-7.5-7.5-7.5H5c-1.654,0-3,1.346-3,3V24h2V15H14.5c.02,0,.04-.003,.061-.003l5.145,9.003h2.303ZM4,3c0-.552,.449-1,1-1H14.5c3.032,0,5.5,2.468,5.5,5.5s-2.468,5.5-5.5,5.5H4V3Z"/></svg>

);
