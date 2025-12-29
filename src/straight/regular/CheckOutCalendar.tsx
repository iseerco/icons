import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CheckOutCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2h-3V0h-2v2h-8V0h-2v2h-3c-1.654,0-3,1.346-3,3v7.395l2-2v-.395h20v12H2v-.395l-2-2v4.395h24V5c0-1.654-1.346-3-3-3ZM2,8v-3c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v3H2Zm2.623,5.429l-1.571,1.571h7.948v2H3.052l1.571,1.571-1.414,1.414-2.659-2.659c-.731-.731-.731-1.92,0-2.651l2.659-2.659,1.414,1.414Z"/>
</svg>

);
