import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,14.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5,.673-1.5,1.5-1.5,1.5,.673,1.5,1.5Zm6-9.5V22H0V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3Zm-11.367,13L8.348,6h-.695L3.367,18h2.124l.714-2h3.591l.714,2h2.124Zm7.367-12h-2v5.351c-.456-.219-.961-.351-1.5-.351-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5c.539,0,1.044-.133,1.5-.351v.351h2V6ZM6.919,14h2.162l-1.081-3.027-1.081,3.027Z"/></svg>

);
