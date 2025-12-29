import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrFrancSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,.5c0,.28-.22,.5-.5,.5H9.5c-1.93,0-3.5,1.57-3.5,3.5v6.5h11.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H6v5h6.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H6v5.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-5.5H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H5V4.5C5,2.02,7.02,0,9.5,0h12c.28,0,.5,.22,.5,.5Z"/></svg>

);
