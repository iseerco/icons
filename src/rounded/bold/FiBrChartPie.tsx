import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartPie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.415,8.836-7.5,1.458c-.044-.085-.093-.167-.131-.255L9.847,3.271A8.939,8.939,0,0,1,20.415,8.836ZM3,12A8.994,8.994,0,0,1,7.094,4.465l2.938,6.768A7.245,7.245,0,0,0,12.269,14.1l5.855,4.481A8.985,8.985,0,0,1,3,12Zm16.954,4.2L15.56,12.836l5.429-1.055c0,.073.011.145.011.219A8.942,8.942,0,0,1,19.954,16.2Z"/></svg>

);
