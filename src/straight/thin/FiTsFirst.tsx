import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFirst = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2v20h-1V3.611l-3.728,3.823-.717-.697,4.619-4.737h.825Zm-10,7h3v1h-3v4h3v1h-3v3h-1v-3h-4v3h-1v-3h-3v-1h3v-4h-3v-1h3v-3h1v3h4v-3h1v3Zm-1,1h-4v4h4v-4Z"/>
</svg>

);
