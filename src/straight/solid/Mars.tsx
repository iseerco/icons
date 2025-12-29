import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M469.272,0H341.561v42.57h97.614L293.754,187.991c-78.702-62.08-192.828-48.605-254.908,30.097  S-9.758,410.916,68.944,472.996s192.828,48.605,254.908-30.097c51.995-65.917,51.995-158.893,0-224.81L469.272,72.668v97.614h42.57  V42.57C511.842,19.059,492.783,0,469.272,0z"/>
</svg>

);
