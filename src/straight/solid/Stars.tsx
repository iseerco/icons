import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.982,24,3.66,23l2.394-7.261L0,11.731V10H7.946l2.162-7h1.784l2.162,7H22v1.724l-6.056,4.119,2.438,7.175-1.391.961L11,19.348ZM17.827,7.926l-.481-.362.869-2.717L16,3.615V3h2.9l.785-3h.647l.784,3H24v.611L21.8,4.884l.884,2.686-.5.349L20.01,6.238Z"/></svg>

);
