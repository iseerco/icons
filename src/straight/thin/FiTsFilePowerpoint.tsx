import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFilePowerpoint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,11h-3v9h1v-3h2c1.65,0,3-1.35,3-3s-1.35-3-3-3Zm0,5h-2v-4h2c1.1,0,2,.9,2,2s-.9,2-2,2ZM14.71,0H4.5c-1.38,0-2.5,1.12-2.5,2.5V24H22V7.29L14.71,0Zm.29,1.71l5.29,5.29h-5.29V1.71ZM3,23V2.5c0-.83,.67-1.5,1.5-1.5H14v7h7v15H3Z"/></svg>

);
