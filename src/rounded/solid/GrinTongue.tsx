import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm3.5,8a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,15.5,8Zm-7,0a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,8.5,8ZM17,16H15v.6c-.133,4.495-5.869,4.49-6,0V16H7a1,1,0,0,1,0-2H17A1,1,0,0,1,17,16Zm-6,0h2v.6c-.062,1.839-1.938,1.837-2,0Z"/></svg>

);
