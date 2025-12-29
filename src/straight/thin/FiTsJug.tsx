import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsJug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.89,10.99l-.66-.44c1.07-.61,1.78-1.76,1.78-3.05,0-1.93-1.57-3.5-3.5-3.5-.98,0-1.86,.4-2.5,1.05V1h1V0H8V1h1V7.73l-4.89,3.26c-.7,.46-1.11,1.24-1.11,2.08v10.93H21V13.07c0-.84-.42-1.62-1.11-2.08Zm-2.39-5.99c1.38,0,2.5,1.12,2.5,2.5,0,1.1-.73,2.07-1.76,2.39l-3.24-2.16v-.23c0-1.38,1.12-2.5,2.5-2.5Zm2.5,18H4V15h14v-1H4v-.93c0-.5,.25-.97,.67-1.25l5.33-3.55V1h4v7.27l5.33,3.55c.42,.28,.67,.75,.67,1.25v9.93Z"/></svg>

);
