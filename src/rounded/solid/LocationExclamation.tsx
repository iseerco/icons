import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LocationExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.777,3.222c-2.077-2.077-4.84-3.222-7.777-3.222s-5.7,1.145-7.778,3.222C-.067,7.511-.067,14.489,4.25,18.806l3.942,3.642c1.024,1.001,2.377,1.553,3.808,1.553s2.783-.552,3.786-1.533l3.991-3.688c4.289-4.289,4.289-11.268,0-15.557Zm-8.777,2.778c0-.553.447-1,1-1s1,.447,1,1v5.5c0,.553-.447,1-1,1s-1-.447-1-1v-5.5Zm1,11c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>

);
