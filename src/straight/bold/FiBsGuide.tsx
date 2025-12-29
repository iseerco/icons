import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGuide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,12c3.309,0,6-2.691,6-6h2v-3h-2.805c-1.039-1.792-2.978-3-5.195-3C3.691,0,1,2.691,1,6s2.691,6,6,6Zm0-3c-1.654,0-3-1.346-3-3h6c0,1.654-1.346,3-3,3Zm5,10h3v5h-3v-5ZM24,2.5l-4,2.5v6.075l-5.332,5.925H5c-1.103,0-2,.897-2,2v5H0v-5c0-2.757,2.243-5,5-5h8.332l3.668-4.075V0h3l4,2.5Z"/>
</svg>

);
