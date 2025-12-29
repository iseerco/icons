import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceEyesXmarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm6.982-13.343l-1.568,1.568,1.568,1.568-1.414,1.414-1.568-1.568-1.568,1.568-1.414-1.414,1.568-1.568-1.568-1.568,1.414-1.414,1.568,1.568,1.568-1.568,1.414,1.414Zm-10.982,2.982l-1.568,1.568-1.414-1.414,1.568-1.568-1.568-1.568,1.414-1.414,1.568,1.568,1.568-1.568,1.414,1.414-1.568,1.568,1.568,1.568-1.414,1.414-1.568-1.568Zm7,6.361h-6c0-1.657,1.343-3,3-3s3,1.343,3,3Z"/></svg>

);
