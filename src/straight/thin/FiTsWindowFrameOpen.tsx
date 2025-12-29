import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWindowFrameOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23v1H0v-1h2v-8h1v8h18v-8h1v8h2Zm-2-10H2V2.5c0-1.378,1.122-2.5,2.5-2.5h15c1.379,0,2.5,1.122,2.5,2.5v10.5Zm-19-1h8.5V1h-7c-.827,0-1.5.673-1.5,1.5v9.5ZM21,2.5c0-.827-.673-1.5-1.5-1.5h-7v11h8.5V2.5Z"/>
</svg>

);
