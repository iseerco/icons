import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFlagAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.484,8l3.011-3.996c.574-.762,.666-1.766,.24-2.619-.426-.854-1.283-1.385-2.237-1.385H4.5C2.019,0,0,2.019,0,4.5V22.5c.034,1.972,2.967,1.971,3,0v-6.5H21.498c.954,0,1.812-.53,2.237-1.385,.426-.854,.334-1.857-.24-2.619l-3.011-3.996ZM3,13V4.5c0-.827,.673-1.5,1.5-1.5h15.995l-3.087,4.098c-.402,.534-.402,1.271,0,1.805l3.087,4.098H3Z"/></svg>

);
