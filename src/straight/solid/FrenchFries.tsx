import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FrenchFries = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.081,24H4.938a3,3,0,0,1-2.951-2.463L0,12H24l-1.967,9.537A3,3,0,0,1,19.081,24ZM2.017,10h2.1L3.282,7.39l2.405-.764L6.263,10H11V4h2v6h4.819l.571-3.349,2.328.739L19.883,10h2.1l1.251-3.91-4.5-1.43L19.4.712,14.75,0,14.4,2H9.507L9.154,0,4.692.8l.655,3.839L.766,6.09Z"/></svg>

);
