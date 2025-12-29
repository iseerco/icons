import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.018,18.518l-4.75,4.75c-.487,.487-1.127,.731-1.768,.731s-1.28-.244-1.768-.731L-.018,18.518l2.121-2.121,2.896,2.896V0h3V19.293l2.896-2.896,2.121,2.121Zm.086-10.914l2.896-2.896V24h3V4.707l2.896,2.896,2.121-2.121L19.268,.732C18.78,.245,18.141,0,17.5,0s-1.28,.244-1.768,.731l-4.75,4.75,2.121,2.121Z"/></svg>

);
