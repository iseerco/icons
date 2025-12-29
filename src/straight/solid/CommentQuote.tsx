import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm-1,13c0,2.206-1.794,4-4,4v-2c1.103,0,2-.897,2-2h-3v-3c0-1.103,.897-2,2-2h3v5Zm7,0c0,2.206-1.794,4-4,4v-2c1.103,0,2-.897,2-2h-3v-3c0-1.103,.897-2,2-2h3v5Z"/></svg>

);
