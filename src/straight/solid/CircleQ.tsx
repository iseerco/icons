import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleQ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.043,18.457l-1.139-1.139c-.819.586-1.822.932-2.904.932-2.757,0-5-2.243-5-5v-2.5c0-2.757,2.243-5,5-5s5,2.243,5,5v2.5c0,.953-.268,1.844-.733,2.603l1.19,1.19-1.414,1.414Zm-4.043-2.207c-1.654,0-3-1.346-3-3v-2.5c0-1.654,1.346-3,3-3s3,1.346,3,3v2.5c0,.395-.078.773-.217,1.119l-1.576-1.576-1.414,1.414,1.664,1.664c-.432.241-.929.379-1.457.379Z"/></svg>

);
