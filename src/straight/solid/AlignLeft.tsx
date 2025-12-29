import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AlignLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_02_align_left" data-name="02 align left"><rect y="4" width="24" height="2"/><rect y="9" width="16" height="2"/><rect y="19" width="16" height="2"/><rect y="14" width="24" height="2"/></g></svg>

);
