import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReservationSmartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.115,11h-5.198l1.714,6h3.484v3h-5.747l-2.571-9h-4.182c-.747,0-1.44-.536-1.56-1.273-.153-.94.568-1.739,1.479-1.739l7.388.013-.835-1.152c-.722-.866-.604-2.153.261-2.874.866-.722,2.153-.605,2.874.261l2.891,3.766v3Zm-9.827,2l1.712,5.991v2.009c0,1.657-1.343,3-3,3H3c-1.657,0-3-1.343-3-3V0h16v6h-3v-3H3v15h10v-5h1.288Zm-4.282,7.006h-4v2.003h4v-2.003Z"/>
</svg>

);
