import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsS = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.904,24h-7.809c-3.361,0-6.096-2.734-6.096-6.096v-.904h3v.904c0,1.707,1.389,3.096,3.096,3.096h7.809c1.707,0,3.096-1.389,3.096-3.096,0-1.372-.921-2.595-2.24-2.975l-10.35-2.977c-2.597-.747-4.41-3.155-4.41-5.857C2,2.734,4.734,0,8.096,0h7.809c3.361,0,6.096,2.734,6.096,6.096v.904h-3v-.904c0-1.707-1.389-3.096-3.096-3.096h-7.809c-1.707,0-3.096,1.389-3.096,3.096,0,1.372,.921,2.595,2.24,2.975l10.35,2.977c2.597,.747,4.41,3.155,4.41,5.857,0,3.361-2.734,6.096-6.096,6.096Z"/></svg>

);
