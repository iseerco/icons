import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHelmetBattle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0c-.398.215-10,5.502-10,10.984v9.326l9,3.706v-8.864l-4-1.963v-2.188h10v2.188l-4,1.963v8.864l9-3.706v-9.326C22,5.502,12.398.215,12,0Zm9,19.64l-7,2.882v-6.748l4-1.963v-3.812H6v3.812l4,1.963v6.748l-7-2.882v-8.656C3,6.543,10.553,2.017,12,1.191c1.447.826,9,5.352,9,9.793v8.656Z"/>
</svg>

);
