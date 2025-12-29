import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGrinTongueWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,9.667C18,11,16.881,11,15.5,11S13,11,13,9.667A2.587,2.587,0,0,1,15.5,7,2.587,2.587,0,0,1,18,9.667ZM24,12A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-3,0a9.011,9.011,0,0,0-9-9C.077,3.453.08,20.549,12,21A9.011,9.011,0,0,0,21,12ZM9.5,11a1.5,1.5,0,0,0,0-3h-2a1.5,1.5,0,0,0,0,3ZM16,13H8a1.5,1.5,0,0,0,0,3H9.023c.48,3.97,5.476,3.966,5.954,0H16A1.5,1.5,0,0,0,16,13Z"/></svg>

);
