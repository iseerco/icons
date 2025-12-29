import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,20h-2.5V4h2.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-2.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.5H4V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5h2.5v16H.5c-.276,0-.5.224-.5.5s.224.5.5.5h2.5v2.5c0,.276.224.5.5.5s.5-.224.5-.5v-2.5h16v2.5c0,.276.224.5.5.5s.5-.224.5-.5v-2.5h2.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-19.5,0V4h16v16H4Z"/>
</svg>

);
