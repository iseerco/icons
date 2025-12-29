import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm10,22H12c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10v10Zm-5.543-13.043l-3.043,3.043,3.043,3.043-1.414,1.414-3.043-3.043-3.043,3.043-1.414-1.414,3.043-3.043-3.043-3.043,1.414-1.414,3.043,3.043,3.043-3.043,1.414,1.414Z"/></svg>

);
