import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm9,21H12c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.037,9,9v9Zm-4.189-11.689l-2.689,2.689,2.689,2.689-2.121,2.121-2.689-2.689-2.689,2.689-2.121-2.121,2.689-2.689-2.689-2.689,2.121-2.121,2.689,2.689,2.689-2.689,2.121,2.121Z"/></svg>

);
