import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sphere = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,15C5.988,15,2,13.194,2,12S5.988,9,12,9s10,1.806,10,3S18.012,15,12,15ZM12,2a10.011,10.011,0,0,1,9.473,6.822A22.013,22.013,0,0,0,12,7,22.013,22.013,0,0,0,2.527,8.822,10.011,10.011,0,0,1,12,2Zm0,20a10.011,10.011,0,0,1-9.473-6.822A22.013,22.013,0,0,0,12,17a22.013,22.013,0,0,0,9.473-1.822A10.011,10.011,0,0,1,12,22Z"/></svg>

);
