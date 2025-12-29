import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,3h-5v-.5c0-1.379-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.121-2.5,2.5v.5H1v3h1.62l1.233,14.791c.15,1.799,1.682,3.209,3.488,3.209h9.319c1.806,0,3.338-1.41,3.488-3.209l1.233-14.791h1.62v-3Zm-5.842,17.541c-.022.262-.236.459-.499.459H7.34c-.262,0-.477-.197-.499-.459l-1.212-14.541h12.74l-1.212,14.541Zm-9.469-5.352l2.189-2.189-2.189-2.189,2.121-2.121,2.189,2.189,2.189-2.189,2.121,2.121-2.189,2.189,2.189,2.189-2.121,2.121-2.189-2.189-2.189,2.189-2.121-2.121Z"/>
</svg>

);
