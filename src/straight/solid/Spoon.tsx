import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.919,1.081c-2.58-2.58-8.744-.04-11.1,2.316a6.206,6.206,0,0,0-.635,8L.043,22.543l1.414,1.414L12.6,12.816a6.174,6.174,0,0,0,8.005-.635C22.959,9.824,25.5,3.661,22.919,1.081Z"/></svg>

);
