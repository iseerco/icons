import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTemplate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,20h12V11H6v9Zm1-8h10v7H7v-7Zm4-4H6v-1h5v1ZM14.71,0H4.5c-1.38,0-2.5,1.12-2.5,2.5V24H22V7.29L14.71,0Zm.29,1.71l5.29,5.29h-5.29V1.71ZM3,23V2.5c0-.83,.67-1.5,1.5-1.5H14v7h7v15H3Z"/></svg>

);
