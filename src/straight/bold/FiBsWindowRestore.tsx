import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWindowRestore = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,6H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5H18V9.5c0-1.93-1.57-3.5-3.5-3.5ZM3,21V11H15v10H3ZM24,3.5v14.5h-4v-3h1V3.5c0-.28-.22-.5-.5-.5H9.5c-.28,0-.5,.22-.5,.5v.5h-3v-.5c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5Z"/></svg>

);
