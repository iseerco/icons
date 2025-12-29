import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tents = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.679,16.697c-.451.804-1.312,1.303-2.247,1.303h-.846L11.326,3.981,14,.059l9.606,14.087c.501.821.519,1.759.073,2.552Zm-16.444,7.303h5.53l-2.765-4.186-2.765,4.186Zm12.379-3.842L10,5.603.366,20.188c-.474.778-.491,1.716-.045,2.509.451.804,1.312,1.303,2.247,1.303h2.27l5.162-7.814,5.162,7.814h2.27c.935,0,1.795-.499,2.247-1.303.446-.793.429-1.73-.064-2.539Z"/>
</svg>

);
