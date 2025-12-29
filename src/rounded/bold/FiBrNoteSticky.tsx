import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrNoteSticky = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0H4.5C2.02,0,0,2.02,0,4.5v15c0,2.48,2.02,4.5,4.5,4.5h11.65c1.42,0,2.76-.55,3.76-1.56l2.54-2.54c1-1,1.56-2.34,1.56-3.76V4.5c0-2.48-2.02-4.5-4.5-4.5ZM3,19.5V4.5c0-.83,.67-1.5,1.5-1.5h15c.83,0,1.5,.67,1.5,1.5V15h-3c-1.65,0-3,1.35-3,3v3H4.5c-.83,0-1.5-.67-1.5-1.5Z"/></svg>

);
