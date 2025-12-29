import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsH2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,4h1v16h-1v-7.5H1v7.5H0V4h1v7.5h10v-7.5Zm7.785,11.485c2.444-1.558,5.215-3.324,5.215-6.485,0-2.804-2.212-5-5.036-5-2.737,0-4.964,2.243-4.964,5h1c0-2.206,1.778-4,3.964-4,2.263,0,4.036,1.757,4.036,4,0,2.613-2.416,4.153-4.752,5.643-2.185,1.393-4.248,2.708-4.248,4.857v.5h10v-1h-8.939c.334-1.353,1.986-2.406,3.724-3.515Z"/></svg>

);
