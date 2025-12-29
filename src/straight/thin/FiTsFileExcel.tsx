import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileExcel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.71,0H4.5c-1.38,0-2.5,1.12-2.5,2.5V24H22V7.29L14.71,0Zm.29,1.71l5.29,5.29h-5.29V1.71ZM3,23V2.5c0-.83,.67-1.5,1.5-1.5H14v7h7v15H3ZM15.44,11l-2.77,4.5,2.77,4.5h-1.17l-2.27-3.69-2.27,3.69h-1.17l2.77-4.5-2.77-4.5h1.17l2.27,3.69,2.27-3.69h1.17Z"/></svg>

);
