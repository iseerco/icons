import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUnderConstruction = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.933,9.422L14.576,1.065c-1.373-1.374-3.78-1.374-5.153,0L1.067,9.421c-.688.688-1.067,1.604-1.067,2.577s.379,1.889,1.067,2.577l8.356,8.358c.71.71,1.644,1.066,2.577,1.066s1.866-.355,2.577-1.066l8.356-8.357c1.421-1.421,1.421-3.732,0-5.153Zm-2.121,3.032l-8.356,8.357c-.251.251-.66.251-.911,0L3.188,12.453c-.164-.164-.188-.355-.188-.455s.024-.291.188-.456L11.544,3.186h0c.162-.162.354-.186.455-.186s.293.024.456.186l8.356,8.357c.251.251.251.66,0,.911Zm-12.812,1.546h8v2h-8v-2Zm6.518-2h-5.036l1.5-5.346c.199-.436.609-.654,1.018-.654s.819.218,1.018.654l1.5,5.346Z"/>
</svg>

);
