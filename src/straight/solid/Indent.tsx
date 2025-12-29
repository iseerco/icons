import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Indent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_06_align_left" data-name="06 align left"><rect y="4" width="24" height="2"/><rect x="8" y="9" width="16" height="2"/><rect y="19" width="24" height="2"/><rect x="8" y="14" width="16" height="2"/><path d="M0,8v9l4.174-3.757a1,1,0,0,0,0-1.486Z"/></g></svg>

);
