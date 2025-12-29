import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLambda = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23v1h-3.239c-.958,0-1.843-.558-2.256-1.421l-7.135-14.919L2.664,24h-1.126L10.826,6.523l-2.234-4.67c-.247-.518-.779-.853-1.354-.853h-3.239V0h3.239c.958,0,1.843.558,2.256,1.421l9.912,20.727c.247.518.779.853,1.354.853h3.239Z"/>
</svg>

);
