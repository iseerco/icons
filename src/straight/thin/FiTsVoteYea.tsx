import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVoteYea = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,12h-1.5V4.5c0-1.38-1.12-2.5-2.5-2.5H6.5c-1.38,0-2.5,1.12-2.5,2.5v7.5h-1.5c-1.38,0-2.5,1.12-2.5,2.5v7.5H24v-7.5c0-1.38-1.12-2.5-2.5-2.5ZM5,4.5c0-.83,.67-1.5,1.5-1.5h11c.83,0,1.5,.67,1.5,1.5v12.5H5V4.5ZM23,21H1v-6.5c0-.83,.67-1.5,1.5-1.5h1.5v5H20v-5h1.5c.83,0,1.5,.67,1.5,1.5v6.5ZM15.88,6.77l.71,.71-3.94,3.94c-.39,.39-.9,.58-1.41,.58s-1.02-.19-1.41-.58l-1.94-1.94,.71-.71,1.94,1.94c.38,.38,1.04,.38,1.41,0l3.94-3.94Z"/></svg>

);
