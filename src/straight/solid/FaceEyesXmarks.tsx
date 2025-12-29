import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceEyesXmarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0ZM5.018,11.793l1.568-1.568-1.568-1.568,1.414-1.414,1.568,1.568,1.568-1.568,1.414,1.414-1.568,1.568,1.568,1.568-1.414,1.414-1.568-1.568-1.568,1.568-1.414-1.414Zm3.982,6.207c0-1.657,1.343-3,3-3s3,1.343,3,3h-6Zm9.982-6.207l-1.414,1.414-1.568-1.568-1.568,1.568-1.414-1.414,1.568-1.568-1.568-1.568,1.414-1.414,1.568,1.568,1.568-1.568,1.414,1.414-1.568,1.568,1.568,1.568Z"/></svg>

);
