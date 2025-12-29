import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPointerText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,23.5c0,.276-.224,.5-.5,.5h-1.5c-1.752,0-3.257-1.016-4-2.482-.743,1.465-2.248,2.482-4,2.482h-1.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h1.5c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5h-1.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h1.5c1.752,0,3.257,1.016,4,2.482,.743-1.465,2.248-2.482,4-2.482h1.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-1.5c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h1.5c.276,0,.5,.224,.5,.5Z"/>
</svg>

);
