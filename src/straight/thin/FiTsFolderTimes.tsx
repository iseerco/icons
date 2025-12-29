import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFolderTimes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,3H12.118L8.118,1H2.5C1.121,1,0,2.121,0,3.5V23H6.721c-.347-.305-.666-.64-.956-1H1V8H23v14h-4.765c-.289,.36-.609,.695-.956,1h6.721V5.5c0-1.379-1.121-2.5-2.5-2.5ZM1,7V3.5c0-.827,.673-1.5,1.5-1.5H7.882l4,2h9.618c.827,0,1.5,.673,1.5,1.5v1.5H1Zm11,4c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm0,11c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm.5-5.207l1.354,1.354-.707,.707-1.646-1.646v-3.207h1v2.793Z"/></svg>

);
