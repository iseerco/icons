import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileBinary = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.71,0H4.5c-1.38,0-2.5,1.12-2.5,2.5V24H22V7.29L14.71,0Zm.29,1.71l5.29,5.29h-5.29V1.71ZM3,23V2.5c0-.83,.67-1.5,1.5-1.5H14v7h7v15H3Zm15-12v10h-1V12.65l-1.93,1.99-.72-.7,2.85-2.94h.8Zm-8.5,0c-1.93,0-3.5,1.57-3.5,3.5v3c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-3c0-1.93-1.57-3.5-3.5-3.5Zm2.5,6.5c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5v-3c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v3Z"/></svg>

);
