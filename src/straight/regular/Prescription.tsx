import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Prescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,13h-2.304l-2.33,3.828-3.194-4.943c2.749-.547,4.827-2.977,4.827-5.885,0-3.309-2.691-6-6-6h-6.004c-1.654,0-3,1.346-3,3v17h2v-8h5.877l4.361,6.688-3.234,5.312h2.303l2.121-3.485,2.272,3.485h2.303l-3.448-5.337,3.448-5.663ZM4.996,3c0-.552.449-1,1-1h6.004c2.206,0,4,1.794,4,4s-1.794,4-4,4h-7.004V3Z"/></svg>

);
