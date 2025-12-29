import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGift = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,7H18.328A8.062,8.062,0,0,0,20,2H17a4.8,4.8,0,0,1-3.214,4.689A8.4,8.4,0,0,0,15,3,3,3,0,0,0,9,3a8.4,8.4,0,0,0,1.214,3.689A4.8,4.8,0,0,1,7,2H4A8.062,8.062,0,0,0,5.672,7H3.5A3.5,3.5,0,0,0,0,10.5V15H2v9H22V15h2V10.5A3.5,3.5,0,0,0,20.5,7Zm.5,3.5V12H13.5V10h7A.5.5,0,0,1,21,10.5Zm-18,0a.5.5,0,0,1,.5-.5h7v2H3ZM5,15h5.5v6H5Zm14,6H13.5V15H19Z"/></svg>

);
