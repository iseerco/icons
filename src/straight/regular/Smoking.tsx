import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Smoking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,22h20v-6H0v6Zm18-2h-9v-2h9v2Zm-16-2h5v2H2v-2Zm20-2h2v6h-2v-6Zm-2-4.18v2.18h-2v-2.18c0-.698-.372-1.356-.972-1.716l-1.601-.961c-1.497-.898-2.427-2.541-2.427-4.287v-2.856h2v2.856c0,1.048.558,2.033,1.457,2.572l1.602.961c1.198.72,1.942,2.034,1.942,3.431Zm4-1.556v1.735h-2v-1.735c0-1.048-.558-2.033-1.457-2.572l-2.087-1.252c-.899-.54-1.457-1.526-1.457-2.573V0h2v3.867c0,.35.187.679.486.858l2.086,1.252c1.497.898,2.427,2.541,2.427,4.287Z"/></svg>

);
