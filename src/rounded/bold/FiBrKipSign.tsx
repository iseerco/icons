import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrKipSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,13c0,.83-.67,1.5-1.5,1.5H10.45l8.95,6.81c.66,.5,.79,1.44,.29,2.1-.29,.39-.74,.59-1.2,.59-.32,0-.64-.1-.91-.31L7,15.64v6.86c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5V14.5h-.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h.5V1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5V10.04L17.48,.4c.61-.56,1.56-.52,2.12,.09,.56,.61,.52,1.56-.09,2.12L9.85,11.5h10.65c.83,0,1.5,.67,1.5,1.5Z"/></svg>

);
