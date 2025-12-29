import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRubleSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,15c9.929-.353,9.922-14.65,0-15h-4c-3.033,0-5.5,2.468-5.5,5.5v6.5h-1.5c-1.972,.034-1.971,2.967,0,3h1.5v2h-1.5c-1.972,.034-1.971,2.967,0,3h1.5v2.5c.034,1.972,2.967,1.971,3,0v-2.5h6.5c1.972-.034,1.971-2.967,0-3h-6.5v-2h6.5ZM8,5.5c0-1.379,1.122-2.5,2.5-2.5h4c5.935,.156,5.931,8.846,0,9h-6.5V5.5Z"/></svg>

);
