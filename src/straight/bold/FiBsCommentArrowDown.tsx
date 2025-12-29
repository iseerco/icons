import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm9,21H12c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9v9Zm-7.5-7h3l-3.793,3.707c-.391,.391-1.024,.391-1.414,0l-3.793-3.707h3V6h3V14Z"/></svg>

);
