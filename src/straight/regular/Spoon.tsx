import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.919,1.081c-2.58-2.58-8.744-.04-11.1,2.316a6.221,6.221,0,0,0-.65,8.019L.043,22.543l1.414,1.414L12.583,12.831a6.223,6.223,0,0,0,8.02-.65C22.959,9.824,25.5,3.661,22.919,1.081Zm-3.731,9.686a4.211,4.211,0,0,1-5.955-5.955,11.489,11.489,0,0,1,6.661-2.826,2.238,2.238,0,0,1,1.611.509C22.952,3.942,21.04,8.915,19.188,10.767Z"/></svg>

);
