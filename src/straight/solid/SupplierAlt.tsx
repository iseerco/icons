import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SupplierAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm13,5.189h-7v16.712h-2v-7.311h-2v7.311h-2v-7.311H0v-8.356c0-1.728,1.346-3.133,3-3.133h12v2.089Zm7.5,10.311h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5c0-.828-.672-1.5-1.5-1.5Zm-8,0h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5c0-.828-.672-1.5-1.5-1.5Zm4-8h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5c0-.828-.672-1.5-1.5-1.5Z"/>
</svg>

);
