import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltMiddle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.009,23.665c-.476,0-.956-.168-1.338-.508l-3.748-3.157H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3V20h-6.852l-3.848,3.18c-.361,.322-.825,.485-1.292,.485ZM2,18H7.654l4.327,3.645,4.449-3.645h5.571V3c0-.551-.448-1-1-1H3c-.551,0-1,.449-1,1v15Z"/></svg>

);
