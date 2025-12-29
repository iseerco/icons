import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTally3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2,.5v23c0,.276-.224.5-.5.5s-.5-.224-.5-.5V.5c0-.276.224-.5.5-.5s.5.224.5.5Zm13.5-.5c-.276,0-.5.224-.5.5v23c0,.276.224.5.5.5s.5-.224.5-.5V.5c0-.276-.224-.5-.5-.5Zm-7,0c-.276,0-.5.224-.5.5v23c0,.276.224.5.5.5s.5-.224.5-.5V.5c0-.276-.224-.5-.5-.5Z"/></svg>

);
