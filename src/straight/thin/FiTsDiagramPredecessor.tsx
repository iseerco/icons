import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiagramPredecessor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,21.5c0,1.38,1.12,2.5,2.5,2.5H21.5c1.38,0,2.5-1.12,2.5-2.5v-6.5H0v6.5Zm1-5.5H23v5.5c0,.83-.67,1.5-1.5,1.5H2.5c-.83,0-1.5-.67-1.5-1.5v-5.5ZM14,5h4c.83,0,1.5,.67,1.5,1.5v2.5h-3.58l3.1,3.56c.25,.28,.61,.44,.99,.44s.74-.16,1-.45l3.07-3.55h-3.58v-2.5c0-1.38-1.12-2.5-2.5-2.5h-4v-1.5c0-1.38-1.12-2.5-2.5-2.5H2.5C1.12,0,0,1.12,0,2.5v6.5H14V5Zm6.26,6.89c-.17,.19-.33,.19-.49,0l-1.65-1.89h3.78l-1.63,1.89ZM13,2.5v.79l-4.71,4.71h-3.59L11.69,1.01c.74,.1,1.31,.73,1.31,1.49ZM2.5,1h2.79L1,5.29V2.5c0-.83,.67-1.5,1.5-1.5ZM1,6.71L6.71,1h3.59L3.29,8H1v-1.29Zm8.71,1.29l3.29-3.29v3.29h-3.29Z"/></svg>

);
