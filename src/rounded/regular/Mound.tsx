import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.628,19.296l-3.738-7.398c-1.513-2.994-4.536-4.853-7.89-4.853s-6.377,1.859-7.89,4.853L.376,19.289c-.533,1.015-.499,2.206.093,3.189.591.981,1.626,1.567,2.769,1.567h17.524c1.143,0,2.178-.586,2.769-1.567.594-.986.626-2.182.097-3.182Zm-1.81,2.15c-.229.38-.614.599-1.056.599H3.238c-.442,0-.827-.218-1.056-.599-.232-.385-.244-.834-.034-1.231.003-.005.006-.011.009-.017l3.738-7.398c1.188-2.352,3.47-3.755,6.105-3.755s4.917,1.404,6.105,3.755l3.747,7.415c.21.397.198.846-.034,1.231Z"/>
</svg>

);
