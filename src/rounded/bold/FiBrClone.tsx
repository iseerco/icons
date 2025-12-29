import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrClone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.5,0h-7c-2.481,0-4.5,2.019-4.5,4.5v7c0,2.481,2.019,4.5,4.5,4.5h7c2.481,0,4.5-2.019,4.5-4.5v-7c0-2.481-2.019-4.5-4.5-4.5Zm1.5,11.5c0,.827-.673,1.5-1.5,1.5h-7c-.827,0-1.5-.673-1.5-1.5v-7c0-.827.673-1.5,1.5-1.5h7c.827,0,1.5.673,1.5,1.5v7Zm-5,8c0,2.481-2.019,4.5-4.5,4.5h-7c-2.481,0-4.5-2.019-4.5-4.5v-7c0-2.481,2.019-4.5,4.5-4.5.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5-1.5.673-1.5,1.5v7c0,.827.673,1.5,1.5,1.5h7c.827,0,1.5-.673,1.5-1.5s.672-1.5,1.5-1.5,1.5.671,1.5,1.5Z"/></svg>

);
