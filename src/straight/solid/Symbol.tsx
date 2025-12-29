import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Symbol = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_03_align_right" data-name="03 align right"><rect y="4" width="24" height="2"/><rect x="8" y="9" width="16" height="2"/><rect x="8" y="19" width="16" height="2"/><rect y="14" width="24" height="2"/></g></svg>

);
