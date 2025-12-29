import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CrossReligion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,7h-4V3c0-1.654-1.346-3-3-3s-3,1.346-3,3V7H5c-1.654,0-3,1.346-3,3s1.346,3,3,3h4v8c0,1.654,1.346,3,3,3s3-1.346,3-3V13h4c1.654,0,3-1.346,3-3s-1.346-3-3-3Z"/></svg>

);
