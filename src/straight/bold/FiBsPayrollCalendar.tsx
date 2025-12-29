import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPayrollCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.348,24H0s0-19,0-19c0-1.654,1.346-3,3-3h3V0h3v2h6V0h3v2h3c1.654,0,3,1.346,3,3v5H3v11h11.213c.349,1.229,1.114,2.283,2.135,3Zm5.337-6.733l-3.04-.507c-.374-.062-.645-.382-.645-.761,0-.552.448-1,1-1h2c.552,0,1,.448,1,1h2c0-1.654-1.346-3-3-3v-1h-2v1c-1.654,0-3,1.346-3,3,0,1.36.974,2.51,2.315,2.733l3.04.507c.374.062.645.382.645.76,0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1h-2c0,1.654,1.346,3,3,3v1h2v-1c1.654,0,3-1.346,3-3,0-1.359-.974-2.509-2.315-2.732Z"/>
</svg>

);
