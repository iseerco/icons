import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPaperclipVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,24c-3.58,0-6.5-2.92-6.5-6.5V4.5C6,2.02,8.02,0,10.5,0s4.5,2.02,4.5,4.5v13c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5V5h1v12.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5V4.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v13c0,3.03,2.47,5.5,5.5,5.5s5.5-2.47,5.5-5.5V3h1v14.5c0,3.58-2.92,6.5-6.5,6.5Z"/></svg>

);
