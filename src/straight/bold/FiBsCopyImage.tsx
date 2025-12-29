import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCopyImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,7.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm12-2v11.5H5V5.5c0-1.93,1.57-3.5,3.5-3.5h12c1.93,0,3.5,1.57,3.5,3.5ZM8,14l5-5,3.3,3.3,4.7-4.78v-2.02c0-.28-.22-.5-.5-.5H8.5c-.28,0-.5,.22-.5,.5V14ZM3,5.05c-1.69,.25-3,1.69-3,3.45v13.5H19v-3H3V5.05Z"/></svg>

);
