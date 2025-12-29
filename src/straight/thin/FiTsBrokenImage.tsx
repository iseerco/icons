import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBrokenImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.71,0H4.5c-1.38,0-2.5,1.12-2.5,2.5V24H22V7.29L14.71,0Zm.29,1.71l5.29,5.29h-5.29V1.71ZM4.5,1H14v7h7v8.13l-4.57-4.57-4.43,4.43-4.43-4.43-4.57,4.57V2.5c0-.83,.67-1.5,1.5-1.5Zm-1.5,22v-5.45l4.57-4.57,4.43,4.43,4.43-4.43,4.57,4.57v5.46H3Z"/></svg>

);
