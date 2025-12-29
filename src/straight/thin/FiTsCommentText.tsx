import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm11,23H12c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v11Z"/><polygon points="6.5 10 7.5 10 7.5 8 11.5 8 11.5 17 9.5 17 9.5 18 14.5 18 14.5 17 12.5 17 12.5 8 16.5 8 16.5 10 17.5 10 17.5 7 6.5 7 6.5 10"/></svg>

);
