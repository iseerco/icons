import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFtp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 19h-8.851a3.509 3.509 0 0 0 -1.649-1.649v-2.351h7.5v-9.5a3.5 3.5 0 0 0 -3.5-3.5h-5.034l-2.909-2h-3.057a3.5 3.5 0 0 0 -3.5 3.5v11.5h7.5v2.351a3.509 3.509 0 0 0 -1.649 1.649h-8.851v3h8.851a3.479 3.479 0 0 0 6.3 0h8.849zm-18-12h12v5h-12z"/></svg>
);
