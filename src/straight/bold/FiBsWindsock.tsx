import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWindsock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8.271,4.219,4.314A2.5,2.5,0,1,0,1,4.5V24H4V19.729l20-4ZM14,9.329l2,.4v4.542l-2,.4Zm-3,5.942-2,.4V8.329l2,.4ZM4,7.329l2,.4v8.542l-2,.4Zm17,5.942-2,.4V10.329l2,.4Z"/></svg>

);
