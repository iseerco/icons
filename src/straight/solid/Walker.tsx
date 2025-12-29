import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Walker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,18.184V3c0-1.654-1.346-3-3-3h-8.585c-1.27,0-2.406.805-2.829,2.001L.057,23.327l1.887.666,4.587-12.993h13.47v7.184c-1.161.414-2,1.514-2,2.816,0,1.654,1.346,3,3,3s3-1.346,3-3c0-1.302-.839-2.402-2-2.816ZM7.236,9l2.236-6.333c.141-.399.52-.667.942-.667h8.585c.552,0,1,.448,1,1v6H7.236Z"/></svg>

);
