import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12ZM10.939,8.111,13.061,5.99,17.3,10.232a2.5,2.5,0,0,1,0,3.536L13.061,18.01l-2.122-2.121,2.39-2.389H6v-3h7.329Z"/></svg>

);
