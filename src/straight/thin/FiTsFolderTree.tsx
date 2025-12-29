import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFolderTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11V4.5c0-1.379-1.122-2.5-2.5-2.5h-3.293l-2-2h-3.707c-1.378,0-2.5,1.121-2.5,2.5v2.5H1V0H0V16.5c0,1.379,1.122,2.5,2.5,2.5h7.5v5h14v-6.5c0-1.379-1.122-2.5-2.5-2.5h-3.293l-2-2h-3.707c-1.378,0-2.5,1.121-2.5,2.5v2.5H2.5c-.827,0-1.5-.673-1.5-1.5V6H10v5h14ZM11,2.5c0-.827,.673-1.5,1.5-1.5h3.293l2,2h3.707c.827,0,1.5,.673,1.5,1.5v5.5H11V2.5Zm0,13c0-.827,.673-1.5,1.5-1.5h3.293l2,2h3.707c.827,0,1.5,.673,1.5,1.5v5.5H11v-7.5Z"/></svg>

);
