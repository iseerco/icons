import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Satellite = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.195,9.695l-3.652-3.652L8.5.086l3.652,3.652-5.957,5.957Zm8.088,8.088l3.674,3.674,5.957-5.957-3.674-3.674-5.957,5.957Zm-9.022-5.694c-1.776,0-3.447.691-4.703,1.948l-.354.354,3.996,3.996-1.407,1.407,1.414,1.414,1.407-1.407,3.995,3.996.354-.354c1.256-1.256,1.948-2.926,1.948-4.703s-.691-3.447-1.948-4.703c-1.256-1.256-2.926-1.948-4.702-1.948ZM23.269,2.433l-1.725-1.725c-.946-.945-2.593-.943-3.535,0l-9.878,9.877c1.206.424,2.315,1.107,3.245,2.037.922.922,1.601,2.019,2.026,3.213l9.866-9.867c.975-.975.975-2.561,0-3.536Z"/>
</svg>

);
