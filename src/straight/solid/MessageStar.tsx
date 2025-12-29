import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm6,10.92l-3.3,1.91,1.33,4.03-.75,.52-3.26-2.52h-.01l-3.27,2.53-.72-.54,1.3-4.08-3.32-1.85v-.92h4.34l1.18-4.5h.97l1.18,4.5h4.33v.92Z"/>
</svg>

);
