import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsObjectExclude = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,10h-1.5c-.28,0-.5,.22-.5,.5v1.5h-3v-1.5c0-1.93,1.57-3.5,3.5-3.5h1.5v3Zm2,4h-2v3h5v-5h-3v2Zm10-3.5v13.5H7v-7H0V3.5C0,1.57,1.57,0,3.5,0H13.5c1.93,0,3.5,1.57,3.5,3.5v3.5h3.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.28-.22-.5-.5-.5h-6.5V3.5c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5V14h7v7h11V10.5Z"/></svg>

);
