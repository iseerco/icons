import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsImages = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,5.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm12-2V15H5V3.5c0-1.93,1.57-3.5,3.5-3.5h12c1.93,0,3.5,1.57,3.5,3.5ZM8,12l5-5,3.3,3.3,4.7-4.78V3.5c0-.28-.22-.5-.5-.5H8.5c-.28,0-.5,.22-.5,.5V12Zm9.19,8.32l-14.19-3.86V7.71L0,18.76l19.3,5.24,1.89-7h-3.11l-.89,3.32Z"/></svg>

);
