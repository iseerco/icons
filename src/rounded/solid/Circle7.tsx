import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.789,8.895l-4.921,8.603c-.185,.322-.522,.503-.869,.503-.168,0-.339-.042-.496-.132-.479-.274-.646-.886-.372-1.365L14.026,7.95l-5.026,.05c-.552,0-1-.447-1-1s.448-1,1-1h5c.698,0,1.334,.354,1.701,.948,.367,.595,.4,1.321,.088,1.946Z"/></svg>

);
