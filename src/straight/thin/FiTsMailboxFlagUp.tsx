import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMailboxFlagUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.188,6h-1.214c.635.838,1.026,1.87,1.026,3v11h-11v-11c0-2.086-1.071-3.924-2.69-5h5.69v-1H5.812C2.607,3,0,5.607,0,8.812v12.188h24v-12c0-1.093-.299-2.116-.812-3Zm-12.188,14H1v-11c0-2.761,2.239-5,5-5s5,2.239,5,5v11Zm7-11h-1V3h4v1h-3v5Zm-14,1h4v1h-4v-1Z"/>
</svg>

);
