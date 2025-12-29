import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoltSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.084,15.67l2.551-3.847c.502-.757.548-1.725.119-2.525-.43-.801-1.261-1.298-2.17-1.298h-3.801L15.806,0h-3.321l-4.415,6.656L1.457.043.043,1.457l22.5,22.5,1.414-1.414-6.873-6.873Zm-2.256,3.401l-3.27,4.929h-3.321l2.023-8h-3.774c-.917,0-1.757-.503-2.191-1.313-.428-.798-.385-1.76.113-2.51l1.406-2.12,9.014,9.014Z"/>
</svg>

);
