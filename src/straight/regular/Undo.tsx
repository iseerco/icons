import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Undo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M24,24H22a7.008,7.008,0,0,0-7-7H10.17v6.414L.877,14.121a3,3,0,0,1,0-4.242L10.17.586V7H15a9.01,9.01,0,0,1,9,9ZM8.17,5.414,2.291,11.293a1,1,0,0,0,0,1.414L8.17,18.586V15H15a8.989,8.989,0,0,1,7,3.349V16a7.008,7.008,0,0,0-7-7H8.17Z"/></g></svg>

);
