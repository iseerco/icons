import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSignalBarsGood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.5,5h-1c-.827,0-1.5.673-1.5,1.5v17.5h4V6.5c0-.827-.673-1.5-1.5-1.5Zm.5,18h-2V6.5c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v16.5Zm-6.5-12h-1c-.827,0-1.5.673-1.5,1.5v11.5h4v-11.5c0-.827-.673-1.5-1.5-1.5Zm.5,12h-2v-10.5c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v10.5Zm-6.5-6h-1c-.827,0-1.5.673-1.5,1.5v5.5h4v-5.5c0-.827-.673-1.5-1.5-1.5Zm.5,6h-2v-4.5c0-.275.224-.5.5-.5h1c.276,0,.5.225.5.5v4.5Z"/></svg>

);
