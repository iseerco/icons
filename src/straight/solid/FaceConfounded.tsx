import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceConfounded = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.375,6.219l1.249,1.562-1.524,1.219,1.524,1.219-1.249,1.562-3.476-2.781,3.476-2.781Zm-10,1.562l1.249-1.562,3.476,2.781-3.476,2.781-1.249-1.562,1.524-1.219-1.524-1.219Zm9.645,10.633l-2.003-2.004-2.017,1.997-2.021-2-2.023,2.004-3.051-3.052,1.414-1.414,1.644,1.644,2.017-1.996,2.021,2,2.024-2.003,1.997,1.996,1.652-1.652,1.414,1.414-3.066,3.066Z"/></svg>

);
