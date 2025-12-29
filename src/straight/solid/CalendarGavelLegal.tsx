import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarGavelLegal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.562,23.976l1.414-1.414-4.512-4.513,1.432-1.432.824.824,1.414-1.414-5.312-5.312-1.414,1.414.87.87-4.369,4.369-.87-.87-1.414,1.414,5.312,5.312,1.414-1.414-.824-.824,1.523-1.523,4.512,4.513Zm1.438-18.976v3H0v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3Zm-10.117,19H0v-14h15.71l-7.913,7.913,6.087,6.087Z"/>
</svg>

);
