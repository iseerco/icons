import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMessageXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.57,7.525l-2.475,2.475,2.475,2.475-2.121,2.121-2.475-2.475-2.475,2.475-2.121-2.121,2.475-2.475-2.475-2.475,2.121-2.121,2.475,2.475,2.475-2.475,2.121,2.121Zm7.43-4.025v16.5h-6.672l-3.708,3.066c-.448.398-1.024.6-1.607.6-.594,0-1.195-.21-1.674-.635l-3.598-3.031H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5.224-.5.5v13.5h4.836l4.167,3.511,4.246-3.511h4.751V3.5Z"/></svg>

);
