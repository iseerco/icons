import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserRoadmap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M7,21.5v2.5H0v-2.5c0-.828,.672-1.5,1.5-1.5H5.5c.828,0,1.5,.672,1.5,1.5Zm-3.5-2.5c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5ZM20,5l4-2.5L20,0h-3V10h3V5Zm-.5,9h-7.5c-1.105,0-2-.895-2-2s.895-2,2-2h3v-3h-3c-2.761,0-5,2.239-5,5s2.239,5,5,5h7.5c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5H8.649c.219,.456,.351,.961,.351,1.5v1.5h10.307c2.35,0,4.449-1.718,4.672-4.058,.256-2.684-1.848-4.942-4.479-4.942Z"/>
</svg>

);
