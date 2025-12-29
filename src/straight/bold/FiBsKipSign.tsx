import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKipSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.35,24L7,15.72v8.28h-3V14.5H2v-3h2V0h3V10.02L17.73,0h4.4L9.81,11.5h12.19v3H10.28l11.88,9.5h-4.8Z"/></svg>

);
