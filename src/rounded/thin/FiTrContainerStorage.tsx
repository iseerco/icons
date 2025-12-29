import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrContainerStorage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,20h-.5V4h.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H0c-.276,0-.5.224-.5.5s.224.5.5.5h1v16H0c-.276,0-.5.224-.5.5s.224.5.5.5h23.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM2,4h20v16H2V4Zm12,2.5v11c0,.276-.224.5-.5.5s-.5-.224-.5-.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm3,0v11c0,.276-.224.5-.5.5s-.5-.224-.5-.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm3,0v11c0,.276-.224.5-.5.5s-.5-.224-.5-.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm-9,0v11c0,.276-.224.5-.5.5s-.5-.224-.5-.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm-3,0v11c0,.276-.224.5-.5.5s-.5-.224-.5-.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm-3,0v11c0,.276-.224.5-.5.5s-.5-.224-.5-.5V6.5c0-.276.224-.5.5-.5s.5.224.5.5Z"/>
</svg>

);
