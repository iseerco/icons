import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Italic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><polygon points="21 2 21 0 6 0 6 2 12.354 2 9.627 22 3 22 3 24 18 24 18 22 11.646 22 14.373 2 21 2"/></g></svg>

);
