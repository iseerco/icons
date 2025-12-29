import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentArrowUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm9,21H12c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9v9Zm-4-13v5.5l-2.189-2.189-5.589,5.589-2.121-2.121,5.589-5.589-2.189-2.189h5.5c.552,0,1,.448,1,1Z"/></svg>

);
