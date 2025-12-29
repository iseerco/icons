import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrainStation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,5h-6c-2.481,0-4.5,2.019-4.5,4.5v9.5h2v2h-2v3h15v-3h-2v-2h2v-9.5c0-2.481-2.019-4.5-4.5-4.5Zm-7.5,4.5c0-.827.673-1.5,1.5-1.5h1.5v4h-3v-2.5Zm7.5,7.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm-6,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm5.5,4h-5v-2h5v2Zm-1-9v-4h1.5c.827,0,1.5.673,1.5,1.5v2.5h-3Zm-15,4h4v3h-2v5H0V0h12v4h-6v-1h-3v13Z"/>
</svg>

);
