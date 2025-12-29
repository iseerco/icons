import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRssAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.994,21c0,1.657-1.343,3-3,3S-.006,22.657-.006,21s1.343-3,3-3,3,1.343,3,3ZM-.006,0v3c11.58,0,21,9.42,21,21h3C23.994,10.766,13.228,0-.006,0ZM-.006,9v3c6.617,0,12,5.383,12,12h3C14.994,15.729,8.265,9-.006,9Z"/></svg>

);
