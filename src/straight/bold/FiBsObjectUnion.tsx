import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsObjectUnion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H7v-7H0V3.5C0,1.57,1.57,0,3.5,0H13.5c1.93,0,3.5,1.57,3.5,3.5v3.5h3.5c1.93,0,3.5,1.57,3.5,3.5v13.5Zm-14-3h11V10.5c0-.28-.22-.5-.5-.5h-6.5V3.5c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5V14h7v7Z"/></svg>

);
