import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserPilotTie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.7.209c-1.115-.279-2.281-.279-3.396,0l-6.302,1.791v3l2,1v1s2,1,6,1,6-1,6-1v-1l2-1v-3L13.7.209Zm-1.698,5.791l-3.015-1.809,1.029-1.715,1.985,1.191,1.985-1.191,1.029,1.715-3.015,1.809Zm0,4c-2.93,0-4.93-.494-5.998-.854.078,3.241,2.738,5.854,5.998,5.854s5.92-2.613,5.998-5.854c-1.068.36-3.068.854-5.998.854Zm8.998,11v3h-7l-1.5-5.5,2-2.5h1.5c2.757,0,5,2.243,5,5Zm-9.5-2.5l-1.488,5.5H3v-3c0-2.757,2.243-5,5-5h1.5l2,2.5Z"/></svg>

);
