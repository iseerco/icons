import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TowerControl = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.349,12h-5.349V6h3.499c.752,0,1.457,.334,1.935,.915,.477,.582,.665,1.338,.518,2.075l-.602,3.01ZM.651,12H6V6H2.501c-.752,0-1.457,.334-1.935,.915C.09,7.497-.099,8.253,.049,8.99l.602,3.01Zm.4,2l.8,4h6.148v6h8v-6h6.148l.8-4H1.051ZM16,4V2h-3V0h-2V2h-3v2h8Zm-8,2v6h8V6H8Z"/></svg>

);
