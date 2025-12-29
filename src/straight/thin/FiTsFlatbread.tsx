import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFlatbread = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm6.104-16.396l-11.5,11.5-.707-.707,11.5-11.5.707.707Zm.339,5.566l.707.707-6.273,6.273-.707-.707,6.273-6.273Zm-6.611-6.611l-6.273,6.272-.707-.707,6.273-6.272.707.707Z"/>
</svg>

);
