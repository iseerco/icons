import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBusinessTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,11c-3.59,0-6.5,2.91-6.5,6.5s2.91,6.5,6.5,6.5,6.5-2.91,6.5-6.5-2.91-6.5-6.5-6.5Zm1.283,9.904l-2.783-2.783v-4.121h3v2.879l1.904,1.904-2.121,2.121Zm5.217-14.904v6.028c-.813-.964-1.837-1.741-3-2.268v-3.76H3v5H12.028c-.964,.813-1.741,1.837-2.268,3H3v7h6.76c.527,1.163,1.304,2.187,2.268,3H0V6c0-1.654,1.346-3,3-3h3v-.5c0-1.378,1.121-2.5,2.5-2.5h7c1.379,0,2.5,1.122,2.5,2.5v.5h3c1.654,0,3,1.346,3,3Z"/></svg>

);
