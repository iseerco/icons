import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.729,5.573l1.598-5.573H7.673l1.598,5.573-3.917,12.429,6.646,6.042,6.646-6.042-3.917-12.429Zm-1.056-3.573l-.573,2h-2.199l-.573-2h3.346Zm-6.027,15.383l3.587-11.383h1.533l3.587,11.383-4.354,3.958-4.354-3.958Z"/>
</svg>

);
