import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,7.5v7.5h-3v-4.879l-8.439,8.439-2.121-2.121,8.439-8.439h-4.879v-3h7.5c1.379,0,2.5,1.122,2.5,2.5Zm5-4v20.5H0V3.5C0,1.57,1.57,0,3.5,0h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.225-.5-.5-.5H3.5c-.275,0-.5.224-.5.5v17.5h18V3.5Z"/>
</svg>

);
