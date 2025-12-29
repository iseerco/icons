import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VideoArrowDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.707,8.707l-5.293,5.293h3.606v2H7c-1.103,0-2-.897-2-2v-5h2v3.586l5.293-5.293,1.414,1.414Zm10.293,11.207l-4-4v4.086H0V7c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v1.086l4-4v15.828Zm-6-12.914c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v11H18V7Zm4,1.914l-2,2v2.172l2,2v-6.172Z"/></svg>

);
