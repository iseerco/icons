import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MagnetEnergy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.295 7.999h-.631s.93-2.982.93-2.982l-2.064.002c-.415 0-.713-.4-.593-.798l1.509-4.222h3l-1 2.5h2c.484 0 .824.537.557.94l-3.708 4.559zm-4.295-7.999h-7v5h7zm10 12c0 2.923-2.509 5.261-5.491 4.977-2.6-.248-4.509-2.58-4.509-5.191v-4.785h-7v5c0 6.627 5.373 12 12 12s12-5.373 12-12v-5h-7v5zm0-12v5h7v-5z"/></svg>
);
