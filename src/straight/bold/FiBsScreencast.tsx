import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScreencast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5.5v16.5h-9v-3h6V5.5c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5.224-.5.5v1.5H0v-1.5c0-1.93,1.57-3.5,3.5-3.5h17c1.93,0,3.5,1.57,3.5,3.5ZM1.5,19c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm0-5H0v3h1.5c1.93,0,3.5,1.57,3.5,3.5v1.5h3v-1.5c0-3.584-2.916-6.5-6.5-6.5Zm0-5H0v3h1.5c4.687,0,8.5,3.813,8.5,8.5v1.5h3v-1.5c0-6.341-5.159-11.5-11.5-11.5Z"/>
</svg>

);
