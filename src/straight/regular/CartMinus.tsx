import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CartMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,22c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm8-2c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm-1-17v2h8V3h-8Zm4.17,10H5.42l-.94-8H14V3H4.24l-.04-.35c-.18-1.51-1.46-2.65-2.98-2.65H0V2H1.22c.51,0,.93,.38,.99,.88l1.58,13.47c.18,1.51,1.46,2.65,2.98,2.65h13.22v-2H6.78c-.51,0-.93-.38-.99-.88l-.13-1.12H21.83l1.27-7h-2.03l-.91,5Z"/></svg>

);
