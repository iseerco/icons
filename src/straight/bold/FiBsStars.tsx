import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.286,24.043,3.368,22.589l2.256-6.508L0,12.509V10H7.677L9.729,3H12.27l2.053,7H22v2.5l-5.624,3.675,2.307,6.451-2.007,1.391L11,19.626ZM6.369,13l2.867,1.821L8.111,18.067,11,15.833l2.859,2.211-1.1-3.09L15.745,13H12.077L11,9.329,9.924,13ZM17.827,7.941l-.481-.362.869-2.717L16,3.631V3h2.9l.785-3h.647l.784,3H24v.624L21.8,4.9l.884,2.686-.5.349L20.01,6.254Z"/></svg>

);
