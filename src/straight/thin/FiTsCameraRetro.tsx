import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCameraRetro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0h-8.707l-3,3h-3.793v-1h-2v1h-1.5c-1.378,0-2.5,1.121-2.5,2.5v18.5h24V2.5c0-1.379-1.122-2.5-2.5-2.5ZM2.5,4h7.707l3-3h8.293c.827,0,1.5.673,1.5,1.5v10.5h-5.523c-.254-2.799-2.613-5-5.477-5s-5.224,2.201-5.477,5H1v-7.5c0-.827.673-1.5,1.5-1.5Zm14,9.5c0,2.481-2.019,4.5-4.5,4.5s-4.5-2.019-4.5-4.5,2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5ZM1,23v-9h5.523c.254,2.799,2.613,5,5.477,5s5.224-2.201,5.477-5h5.523v9H1Z"/></svg>

);
