import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTeethOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,20.5c0,1.93,1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5v-7.5H0v7.5Zm3-3c0,.828.673,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1.5h2v1.5c0,.828.673,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1.5h2v1.5c0,.828.673,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1.5h2v1.5c0,.828.673,1.5,1.5,1.5s1.5-.672,1.5-1.5v3c0,.275-.224.5-.5.5H3.5c-.276,0-.5-.225-.5-.5v-3ZM20.5,0H3.5C1.57,0,0,1.57,0,3.5v7.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,6.5c0-.828-.673-1.5-1.5-1.5s-1.5.672-1.5,1.5v1.5h-2v-2.5c0-.828-.673-1.5-1.5-1.5s-1.5.672-1.5,1.5v2.5h-2v-2.5c0-.828-.673-1.5-1.5-1.5s-1.5.672-1.5,1.5v2.5h-2v-1.5c0-.828-.673-1.5-1.5-1.5s-1.5.672-1.5,1.5v-3c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v3Z"/></svg>

);
