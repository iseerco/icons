import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dizzy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0ZM5.018,10.568,6.586,9,5.018,7.432,6.432,6.018,8,7.586,9.568,6.018l1.414,1.414L9.414,9l1.568,1.568L9.568,11.982,8,10.414,6.432,11.982ZM12,20a3,3,0,0,1,0-6A3,3,0,0,1,12,20Zm6.982-9.432-1.414,1.414L16,10.414l-1.568,1.568-1.414-1.414L14.586,9,13.018,7.432l1.414-1.414L16,7.586l1.568-1.568,1.414,1.414L17.414,9Z"/></svg>

);
