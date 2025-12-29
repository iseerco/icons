import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHatWitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.242,21l-5.039-14.659,2.38-2.677,1.645,2.631,2.544-1.59-2.94-4.705h-7.255c-2.78,0-5.252,1.768-6.151,4.399L1.756,21H0v3h24v-3h-1.758ZM10.264,5.369c.484-1.417,1.815-2.369,3.312-2.369h2.583l-2.363,2.659,5.274,15.341h-4.07v-3h-6v3h-4.074l5.337-15.631Z"/></svg>

);
