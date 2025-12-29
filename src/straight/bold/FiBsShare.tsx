import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,14a4.969,4.969,0,0,0-3.818,1.811l-5.4-2.438A4.914,4.914,0,0,0,10,12a4.929,4.929,0,0,0-.211-1.359l5.394-2.45A4.972,4.972,0,1,0,14,5c0,.142.03.276.042.415L8.1,8.112A4.947,4.947,0,0,0,5,7,5,5,0,0,0,5,17a4.947,4.947,0,0,0,3.09-1.1l5.952,2.687c-.012.139-.042.272-.042.413a5,5,0,1,0,5-5ZM19,3a2,2,0,1,1-2,2A2,2,0,0,1,19,3ZM5,14a2,2,0,1,1,2-2A2,2,0,0,1,5,14Zm14,7a2,2,0,1,1,2-2A2,2,0,0,1,19,21Z"/></svg>

);
