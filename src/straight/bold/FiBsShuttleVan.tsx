import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShuttleVan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13.349a5.455,5.455,0,0,0-.474-2.234L20.4,4.078A3.5,3.5,0,0,0,17.2,2H3.5A3.5,3.5,0,0,0,0,5.5V20H3.05a2.5,2.5,0,1,0,4.9,0h8.1a2.5,2.5,0,1,0,4.9,0H24ZM17.657,5.3l2.09,4.7H15V5h2.2A.5.5,0,0,1,17.657,5.3ZM9,10V5h3v5ZM3.5,5H6v5H3V5.5A.5.5,0,0,1,3.5,5ZM21,17H3V13H20.975a2.526,2.526,0,0,1,.025.349Z"/></svg>

);
