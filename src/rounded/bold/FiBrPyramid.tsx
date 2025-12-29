import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.51,24H4.488A4.445,4.445,0,0,1,.656,21.831a4.5,4.5,0,0,1-.145-4.42L8.022,2.428A4.463,4.463,0,0,1,12,0h0a4.465,4.465,0,0,1,3.977,2.428l7.52,15A4.508,4.508,0,0,1,19.51,24ZM10.677,3.808,3.171,18.781a1.5,1.5,0,0,0,.04,1.49,1.471,1.471,0,0,0,1.277.723H19.51a1.5,1.5,0,0,0,1.326-2.2l-7.519-15A1.462,1.462,0,0,0,12,3.006h0A1.468,1.468,0,0,0,10.677,3.808Z"/></svg>

);
