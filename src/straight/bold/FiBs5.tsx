import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBs5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,24H4v-3H12.5c1.228,0,2.375-.485,3.23-1.367,.854-.881,1.305-2.043,1.268-3.272-.072-2.405-2.203-4.361-4.75-4.361H4V3.5c0-1.93,1.57-3.5,3.5-3.5h11.5V3H7.5c-.275,0-.5,.224-.5,.5v5.5h5.248c4.152,0,7.628,3.262,7.748,7.271,.062,2.047-.688,3.983-2.113,5.452-1.425,1.469-3.337,2.278-5.383,2.278Z"/></svg>

);
