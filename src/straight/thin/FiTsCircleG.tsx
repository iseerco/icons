import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCircleG = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-11h5.009l-.028,1.51c-.229,2.76-2.323,4.74-4.981,4.74-2.851,0-5-2.149-5-5v-2.25c0-2.944,2.196-5.25,5-5.25,1.887,0,3.591,1.064,4.447,2.776l-.895.447c-.686-1.372-2.047-2.224-3.553-2.224-2.28,0-4,1.827-4,4.25v2.25c0,2.317,1.682,4,4,4,2.125,0,3.8-1.595,3.983-3.792l.008-.458h-3.991v-1Z"/></svg>

);
