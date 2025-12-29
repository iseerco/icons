import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.653,3h.694c.237,.083,.459,.244,.636,.445l5.017,5.555h-4.5v15h-3V9H6L11.017,3.445c.177-.2,.4-.361,.636-.445ZM21,0H3V3H11.653c.114-.04,.23-.062,.347-.062s.234,.022,.347,.062h8.653V0Z"/></svg>

);
