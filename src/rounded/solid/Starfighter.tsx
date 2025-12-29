import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Starfighter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,5a6.927,6.927,0,0,0-3.217.773C10-1.908,14-1.9,15.217,5.773A6.927,6.927,0,0,0,12,5Zm0,2A5.129,5.129,0,0,0,8.388,8.5C8.011,11.851,8,14.932,8,15v8a1,1,0,0,0,2,0V22h4v1a1,1,0,0,0,2,0V15c0-.068-.011-3.149-.388-6.5A5.129,5.129,0,0,0,12,7ZM23,6a1,1,0,0,0-1,1v7H18v9.414L22,18v2a1,1,0,0,0,2,0V7A1,1,0,0,0,23,6ZM2,7A1,1,0,0,0,0,7V20a1,1,0,0,0,2,0V18l4,5.414V14H2Z"/></svg>

);
