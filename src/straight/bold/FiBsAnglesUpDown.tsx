import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAnglesUpDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4.049,10.573l-2.098-2.146L9.542,1.007c.648-.646,1.523-1.007,2.454-1.007h.007c.93.002,1.804.363,2.461,1.018l7.584,7.409-2.096,2.146-7.595-7.419c-.136-.134-.283-.153-.36-.153h0c-.093,0-.229.025-.347.142l-7.601,7.431Zm8.299,10.284c-.125.125-.273.144-.351.144h0c-.076,0-.223-.019-.356-.151l-7.591-7.421-2.098,2.145,7.582,7.412c.658.655,1.532,1.016,2.463,1.016h.007c.93-.002,1.803-.363,2.45-1.007l7.595-7.42-2.096-2.146-7.604,7.43Z"/>
</svg>

);
