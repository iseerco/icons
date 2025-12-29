import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileCircleInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,11c-3.58,0-6.5,2.92-6.5,6.5s2.92,6.5,6.5,6.5,6.5-2.92,6.5-6.5-2.92-6.5-6.5-6.5Zm0,12c-3.03,0-5.5-2.47-5.5-5.5s2.47-5.5,5.5-5.5,5.5,2.47,5.5,5.5-2.47,5.5-5.5,5.5Zm1-8c0,.55-.45,1-1,1s-1-.45-1-1,.45-1,1-1,1,.45,1,1Zm-1.5,2h1v4h-1v-4ZM1,21V2.5c0-.83,.67-1.5,1.5-1.5H11V7h6v2h1v-2.71L11.71,0H2.5C1.12,0,0,1.12,0,2.5V22H10.3c-.2-.32-.38-.65-.54-1H1ZM12,1.71l4.29,4.29h-4.29V1.71Z"/></svg>

);
