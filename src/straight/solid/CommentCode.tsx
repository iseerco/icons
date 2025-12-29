import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm-1.706,15.291l-1.414,1.414-3.298-3.298c-.775-.775-.775-2.037,0-2.812l3.298-3.298,1.414,1.414-3.298,3.298,3.298,3.283Zm8.124-1.884l-3.298,3.298-1.414-1.414,3.298-3.298-3.298-3.283,1.414-1.414,3.298,3.298c.775,.775,.775,2.037,0,2.812Z"/></svg>

);
