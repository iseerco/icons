import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrFlorinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,.5c0,.28-.22,.5-.5,.5h-3.7c-1.37,0-2.62,.81-3.19,2.05l-3.61,7.95h5.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-5.95l-4.26,9.36c-.73,1.6-2.34,2.64-4.1,2.64H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h3.7c1.37,0,2.62-.81,3.19-2.05l4.07-8.95H6.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5.41L15.71,2.64c.73-1.6,2.34-2.64,4.1-2.64h3.7c.28,0,.5,.22,.5,.5Z"/></svg>

);
