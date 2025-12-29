import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandHorns = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,13.5v-4c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v4c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5Zm5.5,1.5c.83,0,1.5-.67,1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5v4c0,.83,.67,1.5,1.5,1.5ZM20.5,2c-.83,0-1.5,.67-1.5,1.5V21H7.09l-3.51-3.29,3.81-3.95c.8-.8,.8-2.09,0-2.89-.8-.8-2.09-.8-2.89,0l-3.52,3.61h0c-.65,.66-1,1.53-1,2.46s.36,1.81,1.06,2.51l4.85,4.55H22V3.5c0-.83-.67-1.5-1.5-1.5Zm-12.5,6.85V1.58C8,.83,7.49,.14,6.75,.02c-.94-.15-1.75,.57-1.75,1.48v6.91c1.01-.25,2.08-.1,3,.44Z"/></svg>

);
