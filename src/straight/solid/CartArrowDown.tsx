import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CartArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,22c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm8-2c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2ZM23.99,3H15v6l1.68-1.68,1.41,1.41-2.68,2.68c-.39,.39-.9,.58-1.41,.58s-1.02-.19-1.41-.58l-2.69-2.69,1.41-1.41,1.69,1.69V3H5.24l-.04-.35c-.18-1.51-1.46-2.65-2.98-2.65H0V2H2.22c.51,0,.93,.38,.99,.88l1.58,13.47c.18,1.51,1.46,2.65,2.98,2.65h12.22v-2H7.78c-.51,0-.93-.38-.99-.88l-.13-1.12h14.94l2.4-12Z"/></svg>

);
