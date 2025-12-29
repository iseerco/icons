import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReflectHorizontalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15.864,10.056c-.549,.493-.864,1.202-.864,1.943s.316,1.445,.854,1.926l8.146,7.455V2.61l-8.136,7.445Zm5.136,4.512l-2.811-2.572,2.811-2.572v5.145ZM0,2.61V21.38l8.132-7.443c.551-.492,.868-1.198,.868-1.938s-.315-1.45-.854-1.935L0,2.61ZM3,14.567v-5.146l2.811,2.572-2.811,2.573ZM10.5,0h3V24h-3V0Z"/>
</svg>

);
