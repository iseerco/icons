import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrListDropdown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5C2.47,0,0,2.47,0,5.5v13c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V5.5c0-3.03-2.47-5.5-5.5-5.5Zm.99,4.31l-2.44,2.23c-.3,.3-.79,.3-1.09,0l-2.44-2.23c-.48-.48-.14-1.31,.54-1.31h4.42c.34,0,.66,.07,.96,.19,.31,.27,.38,.78,.04,1.12Zm-.99,16.69H5.5c-1.38,0-2.5-1.12-2.5-2.5V9H21v9.5c0,1.38-1.12,2.5-2.5,2.5Zm.5-3.5c0,.83-.67,1.5-1.5,1.5H6.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h11c.83,0,1.5,.67,1.5,1.5Zm0-5c0,.83-.67,1.5-1.5,1.5H6.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h11c.83,0,1.5,.67,1.5,1.5Z"/></svg>

);
