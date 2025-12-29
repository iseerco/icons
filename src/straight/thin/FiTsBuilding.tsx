import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4,13h3v1h-3v-1Zm0,5h3v-1h-3v1Zm5,0h3v-1h-3v1ZM4,6h3v-1h-3v1Zm0,4h3v-1h-3v1Zm5,4h3v-1h-3v1Zm0-8h3v-1h-3v1Zm0,4h3v-1h-3v1Zm9,8h2v-1h-2v1Zm0-8h2v-1h-2v1Zm0,4h2v-1h-2v1Zm6-6.5v16.5H0V2.5C0,1.121,1.122,0,2.5,0h11c1.378,0,2.5,1.121,2.5,2.5v2.5h5.5c1.378,0,2.5,1.121,2.5,2.5ZM15,2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v20.5h14V2.5Zm8,5c0-.827-.673-1.5-1.5-1.5h-5.5v17h7V7.5Z"/>
</svg>

);
