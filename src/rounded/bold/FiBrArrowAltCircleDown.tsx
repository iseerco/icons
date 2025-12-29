import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9-4.038,9-9,9Zm4.758-7.493l-4.206,4.261c-.304,.308-.8,.308-1.104,0l-4.197-4.252c-.555-.563-.157-1.516,.634-1.516h2.615V7.5c0-.829,.671-1.5,1.5-1.5s1.5,.671,1.5,1.5v4.5h2.627c.786,0,1.182,.948,.63,1.507Z"/></svg>

);
