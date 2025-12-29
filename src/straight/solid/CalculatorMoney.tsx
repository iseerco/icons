import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalculatorMoney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H7c-1.657,0-3,1.343-3,3v5.139c.633-.091,1.302-.139,2-.139s1.367.048,2,.139v-4.139h12v6h-7.469c.935.819,1.469,1.846,1.469,3h2v2h-2v2h6v2h-6v1.5c0,1.365-.617,2.569-1.687,3.5h11.687V3c0-1.657-1.343-3-3-3Zm-1,15h-2v-2h2v2Zm-2-9v2h-8v-2h8Zm-6,7c0,1.657-2.686,3-6,3S0,14.657,0,13s2.686-3,6-3,6,1.343,6,3Zm0,5.5v2c0,1.995-2.579,3.5-6,3.5s-6-1.505-6-3.5v-2c0,1.971,2.5,3.5,6,3.5s6-1.529,6-3.5Zm0-4v2c0,1.995-2.579,3.5-6,3.5s-6-1.505-6-3.5v-2c0,1.971,2.5,3.5,6,3.5s6-1.529,6-3.5Z"/>
</svg>

);
