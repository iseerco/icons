import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVolumeOff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,23.458l-6.679-5.458h-2.821c-1.379,0-2.5-1.122-2.5-2.5v-7c0-1.378,1.121-2.5,2.5-2.5h2.822L12,.585v22.873ZM2.5,7c-.827,0-1.5.673-1.5,1.5v7c0,.827.673,1.5,1.5,1.5h3.179l5.321,4.35V2.684l-5.323,4.316h-3.177Z"/></svg>

);
