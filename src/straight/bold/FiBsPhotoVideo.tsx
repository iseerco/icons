import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPhotoVideo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,21h-4v-5H3v-2h3v-3H3v-2h3v-3H0V24H20v-8H12v5Zm-9-2h2v2H3v-2Zm12,0h2v2h-2v-2ZM20.5,0H11.5c-1.93,0-3.5,1.57-3.5,3.5V14H24V3.5c0-1.93-1.57-3.5-3.5-3.5ZM11.5,3h9c.271,0,.5,.229,.5,.5v2.5l-2,2-2-2-6,4.875V3.5c0-.276,.224-.5,.5-.5Zm.5,2.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/></svg>

);
