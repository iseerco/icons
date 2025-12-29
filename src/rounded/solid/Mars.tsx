import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M447.987,0H341.561c-11.755,0-21.285,9.53-21.285,21.285s9.53,21.285,21.285,21.285h97.614L293.754,187.991  c-78.702-62.08-192.828-48.605-254.908,30.097S-9.758,410.916,68.944,472.996s192.828,48.605,254.908-30.097  c51.995-65.917,51.995-158.893,0-224.81L469.272,72.668v97.614c0,11.756,9.53,21.285,21.285,21.285  c11.755,0,21.285-9.53,21.285-21.285V63.856C511.842,28.589,483.253,0,447.987,0z"/>
</svg>

);
