import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCupStraw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,5h-7.947l.267-2h4.68V0h-7.32l-.656,5H1v3h1.167l1.524,12.911c.208,1.761,1.702,3.089,3.476,3.089h9.666c1.773,0,3.268-1.328,3.476-3.09l1.524-12.91h1.167v-3Zm-5.67,15.558c-.03.252-.244.442-.497.442H7.167c-.253,0-.467-.19-.497-.441l-1.483-12.559h13.626l-1.483,12.558Z"/>
</svg>

);
