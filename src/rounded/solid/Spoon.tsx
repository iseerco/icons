import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.918,1.082c-2.58-2.58-8.743-.04-11.1,2.316a6.2,6.2,0,0,0-.635,8L.294,22.292a1,1,0,1,0,1.414,1.414L12.6,12.816a6.179,6.179,0,0,0,8-.635C22.958,9.824,25.5,3.662,22.918,1.082Z"/></svg>

);
