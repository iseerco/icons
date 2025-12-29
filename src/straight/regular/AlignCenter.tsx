import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AlignCenter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><rect y="4" width="24" height="2"/><rect x="4" y="9" width="16" height="2"/><rect x="4" y="19" width="16" height="2"/><rect y="14" width="24" height="2"/></g></svg>

);
