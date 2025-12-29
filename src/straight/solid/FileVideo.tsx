import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileVideo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,14h5v4h-5v-4ZM17,.586V5h4.414L17,.586Zm5,6.414V24H2V3C2,1.343,3.343,0,5,0H15V7h7Zm-4,5l-3,2.25v-2.25H6v8H15v-2.25l3,2.25V12Z"/></svg>

);
