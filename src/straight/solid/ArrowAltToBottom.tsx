import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltToBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,22c-.36,0-.721-.148-.983-.445l-5.017-5.555h5V0h2V16h5l-5.017,5.555c-.262,.297-.623,.445-.983,.445Zm-9,0v2H21v-2H3Z"/></svg>

);
