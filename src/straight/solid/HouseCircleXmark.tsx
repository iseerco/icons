import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseCircleXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.726,24H0v-13.926c0-.96.433-1.849,1.188-2.439L10.092.658c1.123-.879,2.692-.881,3.815,0l8.906,6.977c.754.592,1.187,1.48,1.187,2.439v2.652c-1.467-1.667-3.61-2.726-6-2.726-4.411,0-8,3.589-8,8,0,2.39,1.059,4.533,2.726,6Zm9.516-10.243c-2.343-2.343-6.142-2.343-8.485,0-2.343,2.343-2.343,6.142,0,8.485,2.343,2.343,6.142,2.343,8.485,0,2.343-2.343,2.343-6.142,0-8.485Zm-.707,6.364l-1.414,1.414-2.121-2.121-2.121,2.121-1.414-1.414,2.121-2.121-2.121-2.121,1.414-1.414,2.121,2.121,2.121-2.121,1.414,1.414-2.121,2.121,2.121,2.121Z"/>
</svg>

);
