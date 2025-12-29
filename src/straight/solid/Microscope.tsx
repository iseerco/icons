import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Microscope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,13.5c0-4.687-3.813-8.5-8.5-8.5h-2.5v-3h-2V0h-2v2h-2v12h6v-7h2.5c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5h-4.5v-2h5v-2H4v2h5v2H1v2h2v2h2v-2h10v2h2v-2.141c3.973-.712,7-4.185,7-8.359Z"/></svg>

);
