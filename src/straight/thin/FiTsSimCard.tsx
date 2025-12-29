import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSimCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.975,4.268l-3.242-3.242c-.661-.661-1.54-1.025-2.475-1.025H5.5c-1.378,0-2.5,1.122-2.5,2.5v21.5h18V6.743c0-.935-.364-1.814-1.025-2.475Zm.025,18.732H4V2.5c0-.827.673-1.5,1.5-1.5h8.757c.668,0,1.296.26,1.768.732l3.242,3.242c.472.472.732,1.1.732,1.768v16.257Zm-4.5-11h-7c-1.378,0-2.5,1.122-2.5,2.5v4c0,1.378,1.122,2.5,2.5,2.5h7c1.378,0,2.5-1.122,2.5-2.5v-4c0-1.378-1.122-2.5-2.5-2.5Zm1.5,2.5v1.5h-6v-3h4.5c.827,0,1.5.673,1.5,1.5Zm-8.5-1.5h1.5v3h-3v-1.5c0-.827.673-1.5,1.5-1.5Zm-1.5,5.5v-1.5h6v3h-4.5c-.827,0-1.5-.673-1.5-1.5Zm8.5,1.5h-1.5v-3h3v1.5c0,.827-.673,1.5-1.5,1.5Z"/>
</svg>

);
