import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPersonSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,5c1.379,0,2.5-1.122,2.5-2.5s-1.121-2.5-2.5-2.5-2.5,1.122-2.5,2.5,1.121,2.5,2.5,2.5Zm0-4c.827,0,1.5,.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5,.673-1.5,1.5-1.5Zm4.5,7.5c0-1.378-1.121-2.5-2.5-2.5h-4c-1.379,0-2.5,1.122-2.5,2.5v8.5h2v7h1v-7h3v7h1v-7h2V8.5Zm-1,7.5h-7v-7.5c0-.827,.673-1.5,1.5-1.5h4c.827,0,1.5,.673,1.5,1.5v7.5Z"/></svg>

);
