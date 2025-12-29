import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckTow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,11.5c0-3.033-2.467-5.5-5.5-5.5h-4.5v5.715L4.726,0h-2.726v7H0v3h2c1.654,0,3-1.346,3-3v-1.82l5.399,6.82H3.5c-1.93,0-3.5,1.57-3.5,3.5v5.5h3.052c-.034.161-.052.328-.052.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.018-.339-.052-.5h8.104c-.034.161-.052.328-.052.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.018-.339-.052-.5h3.052v-9.5Zm-5.5-2.5c1.378,0,2.5,1.122,2.5,2.5v2.5h-4v-5h1.5Zm-4.5,9H3v-2.5c0-.276.224-.5.5-.5h10.5v3Z"/></svg>

);
