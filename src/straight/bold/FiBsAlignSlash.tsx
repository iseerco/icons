import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAlignSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.05,11H0v-3h3.05l3,3ZM0,18v3h16.05l-3-3H0Zm8.05-5H0v3h11.05l-3-3Zm15.95-7v-3H5.121L2.161.04.04,2.161l21.8,21.8,2.121-2.121-.839-.839h.879v-3h-3.879l-2-2h5.879v-3h-8.879l-2-2h10.879v-3h-13.879l-2-2h15.879Z"/></svg>

);
