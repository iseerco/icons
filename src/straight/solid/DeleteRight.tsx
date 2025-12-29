import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DeleteRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.317,2H3c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h13.317l7.647-10-7.647-10Zm-2.283,12.62l-1.414,1.414-2.62-2.62-2.62,2.62-1.414-1.414,2.62-2.62-2.62-2.62,1.414-1.414,2.62,2.62,2.62-2.62,1.414,1.414-2.62,2.62,2.62,2.62Z"/>
</svg>

);
