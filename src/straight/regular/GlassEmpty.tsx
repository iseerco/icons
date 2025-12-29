import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.111,0l1.747,21.246c.127,1.544,1.44,2.754,2.99,2.754h12.18c1.568,0,2.853-1.177,2.988-2.737L22.885,0H1.111Zm17.912,21.088c-.045.52-.474.912-.996.912H5.848c-.517,0-.954-.403-.997-.918L3.282,2h17.419l-1.678,19.088Z"/>
</svg>

);
