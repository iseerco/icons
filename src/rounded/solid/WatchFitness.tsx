import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WatchFitness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,4h-6c-2.757,0-5,2.243-5,5v6c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5Zm-2.439,11.781c-.331.259-.791.259-1.122,0-1.101-.861-3.439-2.891-3.439-4.621,0-1.193.895-2.16,2-2.16s2,.807,2,2c0-1.193.895-2,2-2s2,.967,2,2.16c0,1.729-2.338,3.76-3.439,4.621ZM6,2.685v-1.685c0-.553.447-1,1-1h10c.553,0,1,.447,1,1v1.685c-.911-.435-1.926-.685-3-.685h-6c-1.074,0-2.089.251-3,.685Zm3,19.315h6c1.074,0,2.089-.251,3-.685v1.685c0,.553-.447,1-1,1H7c-.553,0-1-.447-1-1v-1.685c.911.435,1.926.685,3,.685Z"/></svg>

);
