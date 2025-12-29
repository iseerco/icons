import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPlusMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,9c0-.276.224-.5.5-.5h8V.5c0-.276.224-.5.5-.5s.5.224.5.5v8h8c.276,0,.5.224.5.5s-.224.5-.5.5h-8v8c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-8H3.5c-.276,0-.5-.224-.5-.5Zm17.5,14H3.5c-.276,0-.5.224-.5.5s.224.5.5.5h17c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Z"/></svg>

);
