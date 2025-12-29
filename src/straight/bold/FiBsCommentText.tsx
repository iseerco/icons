import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm9,21H12c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9v9Z"/><polygon points="5.5 12 8.5 12 8.5 10 10.5 10 10.5 15.5 9 15.5 9 18.5 15 18.5 15 15.5 13.5 15.5 13.5 10 15.5 10 15.5 12 18.5 12 18.5 7 5.5 7 5.5 12"/></svg>

);
