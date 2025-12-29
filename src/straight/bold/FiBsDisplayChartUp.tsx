import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDisplayChartUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.977,6.958v5.065l-1.939-1.939-3.779,3.779-3.741-3.741-2.762,2.762-2.121-2.121,4.883-4.883,3.741,3.741,1.658-1.658-1.939-1.939h5.065c.516,0,.935,.419,.935,.935Zm-5.477,11.042v2h4v3H6.5v-3h4v-2H0V4C0,2.346,1.346,1,3,1H21c1.654,0,3,1.346,3,3v14H13.5Zm7.5-3V4H2.998l.002,11H21Z"/>
</svg>

);
