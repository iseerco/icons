import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPencil = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.824,1.176a4.108,4.108,0,0,0-5.676,0L0,18.324V24H5.676L22.824,6.852A4.018,4.018,0,0,0,22.824,1.176ZM4.434,21H3V19.566L15.653,6.914l1.434,1.433Z"/></svg>

);
