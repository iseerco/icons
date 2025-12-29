import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrYogaMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,11.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5ZM16.5,2c-.829,0-1.5,.671-1.5,1.5v5.5h-6.028c-2.097,0-3.982,1.165-4.919,3.04L.158,19.829c-.37,.741-.07,1.642,.671,2.013,.725,.366,1.64,.077,2.013-.671l3.585-7.171h.696l4.07,7.235c.408,.728,1.334,.974,2.042,.572,.722-.406,.978-1.321,.572-2.043l-3.243-5.765h4.435v6.5c0,.828,.671,1.5,1.5,1.5s1.5-.672,1.5-1.5V3.5c0-.829-.671-1.5-1.5-1.5Z"/>
</svg>

);
