import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiagramNested = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,13h-4c-1.93,0-3.5,1.57-3.5,3.5v.5H7.5c-.28,0-.5-.22-.5-.5v-5.5h4V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5v7.5H4v5.5c0,1.93,1.57,3.5,3.5,3.5h5.5v4h11v-7.5c0-1.93-1.57-3.5-3.5-3.5ZM3,8V3.5c0-.28,.22-.5,.5-.5H7.5c.28,0,.5,.22,.5,.5v4.5H3Zm18,13h-5v-4.5c0-.28,.22-.5,.5-.5h4c.28,0,.5,.22,.5,.5v4.5Z"/></svg>

);
