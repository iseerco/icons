import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="11 22 13 22 13 17.243 11 15.243 11 22"/><polygon points="2 10 4 10 4 8 2 6 2 10"/><path d="M13,11.581V5h6.364c.351,0,.636,.286,.636,.636v4.364h2V5.636c0-1.454-1.183-2.636-2.636-2.636H4.636c-.066,0-.13,.016-.196,.021L1.419,0,0,1.419,22.581,24l1.419-1.419L13,11.581Zm-2-6.581v4.581L6.419,5h4.581Z"/></svg>

);
