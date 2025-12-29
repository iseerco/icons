import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBarsStaggered = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,3.5c0-.28,.22-.5,.5-.5H18.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H.5c-.28,0-.5-.22-.5-.5Zm18.5,15.5H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H18.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Zm5-8H5.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H23.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Z"/></svg>

);
