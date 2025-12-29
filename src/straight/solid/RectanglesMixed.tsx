import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectanglesMixed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,11H0v-7C0,2.346,1.346,1,3,1h10v10Zm8,9h-6V3h6c1.654,0,3,1.346,3,3v11c0,1.654-1.346,3-3,3Zm-8,3H5c-1.654,0-3-1.346-3-3v-7h11v10Z"/>
</svg>

);
