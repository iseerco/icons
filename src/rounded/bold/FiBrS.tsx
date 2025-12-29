import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrS = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.904,24h-7.809c-3.361,0-6.096-2.734-6.096-6.096v-.404c.034-1.972,2.966-1.971,3,0v.404c0,1.707,1.389,3.096,3.096,3.096h7.809c3.547-.012,4.252-5.079,.855-6.07l-10.35-2.977C-.292,9.938,1.088,.077,8.096,0h7.809c3.361,0,6.096,2.734,6.096,6.096v.404c-.034,1.972-2.966,1.971-3,0v-.404c0-1.707-1.389-3.096-3.096-3.096h-7.809c-3.547,.012-4.252,5.079-.855,6.07l10.35,2.977c6.702,2.015,5.322,11.876-1.686,11.953Z"/></svg>

);
