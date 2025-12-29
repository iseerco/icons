import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrHeading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,23.5c0,.276-.224.5-.5.5h-4c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1.5v-11H3v11h1.5c.276,0,.5.224.5.5s-.224.5-.5.5H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1.5V1H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4c.276,0,.5.224.5.5s-.224.5-.5.5h-1.5v10h18V1h-1.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4c.276,0,.5.224.5.5s-.224.5-.5.5h-1.5v22h1.5c.276,0,.5.224.5.5Z"/></svg>

);
