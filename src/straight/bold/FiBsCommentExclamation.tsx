import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,3C7.038,3,3,7.037,3,12s4.038,9,9,9h9V12c0-4.963-4.038-9-9-9Zm1.5,2h-3V14h3V5Zm0,11h-3v3h3v-3Z"/></svg>

);
