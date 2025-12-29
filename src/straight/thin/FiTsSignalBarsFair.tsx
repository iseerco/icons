import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSignalBarsFair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.5,11h-1c-.827,0-1.5.673-1.5,1.5v11.5h4v-11.5c0-.827-.673-1.5-1.5-1.5Zm.5,12h-2v-10.5c0-.276.225-.5.5-.5h1c.275,0,.5.224.5.5v10.5Zm-6.5-6h-1c-.827,0-1.5.673-1.5,1.5v5.5h4v-5.5c0-.827-.673-1.5-1.5-1.5Zm.5,6h-2v-4.5c0-.275.225-.5.5-.5h1c.275,0,.5.225.5.5v4.5Z"/></svg>

);
