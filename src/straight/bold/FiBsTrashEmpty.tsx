import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23,3V0H1V3h1.114l1.405,17.776c.143,1.808,1.675,3.224,3.489,3.224h9.984c1.814,0,3.346-1.417,3.489-3.224l1.405-17.776h1.114Zm-15.161,0l2.066,2.066-3.057,3.057-1.433-1.433-.292-3.691h2.716Zm10.23,10.23l-.448,5.666-3.473-3.473,3.057-3.057,.864,.864Zm-12.133,.048l.912-.912,3.057,3.057-3.522,3.522-.448-5.667Zm6.091,4.266l3.456,3.456h-6.912l3.456-3.456Zm0-4.242l-3.057-3.057,3.057-3.057,3.057,3.057-3.057,3.057Zm6.555-6.555l-1.376,1.376-3.058-3.058,2.066-2.066h2.664l-.296,3.747Z"/>
</svg>

);
