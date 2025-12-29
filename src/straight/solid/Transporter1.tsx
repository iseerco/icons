import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Transporter1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-5.322,10.431l3.903-5.639c.562-.81,1.483-1.292,2.467-1.292h2.904c.983,0,1.905.482,2.466,1.291l3.904,5.64-1.645,1.139-3.178-4.591v4.521h-6v-4.522l-3.178,4.591-1.645-1.139Zm.989-8.264l2.333-1.167-2.333-1.167-1.167-2.333-1.167,2.333L.5,3.5l2.333,1.167,1.167,2.333,1.167-2.333Zm16.333-.167l-1-2-1,2-2,1,2,1,1,2,1-2,2-1-2-1ZM4,24h16v-2H4v2Zm4-5h8v-2h-8v2Z"/></svg>

);
