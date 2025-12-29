import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSupplierAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm3,12.5h-2v-5.5c0-.275.224-.5.5-.5h10.5v-3H3.5c-1.93,0-3.5,1.57-3.5,3.5v8.5h2v6h6v-13h-3v4Zm17.5,3h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5c0-.828-.672-1.5-1.5-1.5Zm-8,0h-3c-.828,0-1.5.672-1.5,1.5v4.5h6v-4.5c0-.828-.672-1.5-1.5-1.5Zm-.5-2h6v-4.5c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v4.5Z"/>
</svg>

);
