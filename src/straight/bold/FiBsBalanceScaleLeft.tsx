import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBalanceScaleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.77L20.713,.296l-7.213,1.631V0h-3V2.606l-7.139,1.614L0,13.743v.757c0,2.485,2.014,4.5,4.5,4.5s4.5-2.015,4.5-4.5h0v-.757l-2.524-7.152,4.024-.91v15.319H4v3H20v-3h-6.5V5.003l3.864-.873-2.364,6.61v1.26c.249,2.25,2.184,4,4.5,4,2.485,0,4.5-2.015,4.5-4.5h0v-.73ZM3.091,14l1.409-3.993,1.409,3.993H3.091Zm15.002-3l1.51-4.221,1.325,4.221h-2.835Z"/></svg>

);
