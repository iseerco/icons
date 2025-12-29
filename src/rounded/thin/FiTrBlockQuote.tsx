import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBlockQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,3.5c0-.276.224-.5.5-.5h23c.276,0,.5.224.5.5s-.224.5-.5.5H.5c-.276,0-.5-.224-.5-.5Zm23.5,16.5H6.5c-.276,0-.5.224-.5.5s.224.5.5.5h17c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm0-9H6.5c-.276,0-.5.224-.5.5s.224.5.5.5h17c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM.5,11c-.276,0-.5.224-.5.5v9c0,.276.224.5.5.5s.5-.224.5-.5v-9c0-.276-.224-.5-.5-.5Z"/>
</svg>

);
