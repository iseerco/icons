import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MilkAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14,17H4v-3h10v3Zm5.111-7.773l-1.633-4.188c-.317-.814-.479-1.67-.479-2.544v-.495c.552,0,1-.447,1-1s-.448-1-1-1H7c-.552,0-1,.447-1,1s.448,1,1,1v.495c0,.874-.161,1.729-.479,2.544l-1.633,4.188c-.351.9-.586,1.829-.729,2.773h9.84c1.103,0,2,.897,2,2v3c0,1.103-.897,2-2,2H4c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5v-5.051c0-1.622-.299-3.211-.889-4.723Z"/>
</svg>

);
