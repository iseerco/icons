import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Olive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.019,2.973C16.656-1.388,9.062-.895,4.089,4.079,1.698,6.47.258,9.532.031,12.703c-.229,3.225.818,6.175,2.951,8.308,1.995,1.995,4.664,2.974,7.451,2.974,3.308,0,6.78-1.38,9.479-4.08,2.391-2.39,3.831-5.453,4.058-8.624.229-3.225-.818-6.175-2.951-8.308Zm-1.554,6.483c-.944.944-2.813.606-4.174-.755s-1.7-3.23-.755-4.174,2.813-.606,4.174.755c1.361,1.361,1.7,3.23.755,4.174Z"/>
</svg>

);
