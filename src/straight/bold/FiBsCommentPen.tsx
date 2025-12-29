import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,3C7.037,3,3,7.038,3,12s4.037,9,9,9h9V12c0-4.962-4.037-9-9-9Zm4.361,7.725c.852-.852,.852-2.234,0-3.086h0c-.852-.852-2.234-.852-3.086,0l-6.275,6.275v3.086h3.086l6.275-6.275Z"/></svg>

);
