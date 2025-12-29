import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InboxFull = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,16c0,1.103.897,2,2,2h4c1.103,0,2-.897,2-2v-2h8L21.721,0H2.287L0,14h8v2Zm-3.327-12h14.66l.326,2H4.347l.327-2Zm-.98,6l.327-2h15.964l.326,2H3.693Zm14.307,6h6v5c0,1.654-1.346,3-3,3H3.005c-.803,0-1.557-.313-2.124-.881S.003,21.795.005,20.993l-.003-4.993h5.998c0,2.206,1.794,4,4,4h4c2.206,0,4-1.794,4-4Z"/>
</svg>

);
