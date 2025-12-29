import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Chess = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,11v7H14V11H13V7h2V9h2V7h2V9h2V7h2v4Zm-10.1-6.589-.047.11L10.63,7H11V9H3V7h.391L2.113,4.411a1.8,1.8,0,0,1,1.7-2.4h2.2v-2h2v2h2.2a1.8,1.8,0,0,1,1.7,2.4ZM14,24H0V23a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3ZM3.791,11a46.293,46.293,0,0,1-1.527,7h9.473a46.688,46.688,0,0,1-1.526-7ZM21,20H14.974A4.948,4.948,0,0,1,16,23v1h8V23A3,3,0,0,0,21,20Z"/></svg>

);
