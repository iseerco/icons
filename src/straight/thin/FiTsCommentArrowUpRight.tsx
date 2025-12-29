import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentArrowUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm11,23H12c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v11Zm-6-14v6h-1v-6c0-.081-.01-.16-.029-.235L7.746,16.99l-.707-.707L15.285,8.037c-.082-.024-.167-.037-.255-.037h-6.029v-1h6.029c1.087,0,1.971,.897,1.971,2Z"/></svg>

);
