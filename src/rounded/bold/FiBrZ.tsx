import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,24H6.257c-1.862,0-3.446-1.15-4.034-2.931-.594-1.796,0-3.683,1.512-4.805L18.476,5.326c.695-.516,.522-1.243,.452-1.454-.068-.205-.353-.872-1.186-.872H3.5C1.528,2.966,1.529,.033,3.5,0h14.243c1.862,0,3.446,1.15,4.034,2.931,.594,1.796,0,3.683-1.512,4.805L5.524,18.674c-.695,.516-.522,1.243-.452,1.454,.068,.205,.353,.872,1.186,.872h14.243c1.972,.034,1.971,2.967,0,3Z"/></svg>

);
