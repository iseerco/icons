import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Crutch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.964,9.037L14.964.037l-1.414,1.414.964.964-5.5,5.501c-1.943,1.943-3.014,4.526-3.014,7.275v1.395L.025,22.561l1.414,1.414,5.975-5.975h1.396c2.748,0,5.332-1.07,7.275-3.014l5.5-5.5.965.965,1.414-1.414Zm-15.964,6.963v-.809c0-1.877.62-3.659,1.763-5.112l4.159,4.158c-1.453,1.143-3.235,1.763-5.112,1.763h-.81Zm7.378-3.135l-4.243-4.243,4.793-4.794,4.243,4.243-4.793,4.793Z"/></svg>

);
