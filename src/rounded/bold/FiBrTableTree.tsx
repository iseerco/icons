import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTableTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H5.5C2.468,2,0,4.468,0,7.5v9c0,3.032,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5V7.5c0-3.032-2.468-5.5-5.5-5.5Zm2.5,14.5c0,1.379-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.121-2.5-2.5V7.5c0-.171,.017-.338,.05-.5h1.95v7.5c0,1.379,1.121,2.5,2.5,2.5h4c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5h-3.5v-2h1.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5h-1.5v-2h12.95c.033,.162,.05,.329,.05,.5v9Zm-2-1c0,.828-.672,1.5-1.5,1.5h-2c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h2c.828,0,1.5,.672,1.5,1.5Zm-3.5-3.5h-2c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h2c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5Z"/></svg>

);
