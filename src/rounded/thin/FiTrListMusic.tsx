import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrListMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,0h-1c-2.481,0-4.5,2.019-4.5,4.5v10.842c-.996-1.415-2.642-2.342-4.5-2.342-3.032,0-5.5,2.467-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.467,5.5-5.5V4.5c0-1.93,1.57-3.5,3.5-3.5h1c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-10,23c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5ZM-.013.5C-.013.224.211,0,.487,0h12.025c.276,0,.5.224.5.5s-.224.5-.5.5H.487C.211,1-.013.776-.013.5ZM-.013,6.5c0-.276.224-.5.5-.5h12.025c.276,0,.5.224.5.5s-.224.5-.5.5H.487C.211,7-.013,6.776-.013,6.5Zm8.513,6.5H.487c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h8.013c.276,0,.5.224.5.5s-.224.5-.5.5Z"/>
</svg>

);
