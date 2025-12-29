import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPickaxe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.985,18.985c-.655-3.495-2.459-6.988-4.947-9.903L2.147,23.974.026,21.853,14.918,6.961c-2.917-2.495-6.417-4.304-9.918-4.961V0C10.472,0,14.817,1.359,17.964,3.915l1.725-1.725,2.121,2.121-1.727,1.727c2.548,3.146,3.901,7.485,3.901,12.948h-1.999Z"/>
</svg>

);
