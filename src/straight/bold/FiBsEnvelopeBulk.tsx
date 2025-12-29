import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEnvelopeBulk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.5c0-1.93-1.57-3.5-3.5-3.5h-1.5V3.5c0-1.93-1.57-3.5-3.5-3.5H6.5c-1.93,0-3.5,1.57-3.5,3.5v6.536c-1.694,.243-3,1.704-3,3.464v10.5H16v-5h8V10.5ZM6.5,3H15.5c.276,0,.5,.225,.5,.5v3.5h-4.5c-1.76,0-3.221,1.306-3.464,3h-2.036V3.5c0-.275,.224-.5,.5-.5Zm4.88,10l-2.738,2.737c-.34,.34-.929,.339-1.268,0l-2.738-2.737h6.743Zm1.62,8H3v-5.395l2.253,2.253c.736,.736,1.715,1.142,2.756,1.142s2.019-.405,2.755-1.142l2.236-2.236v5.378Zm8-8h-3v-3h3v3Z"/></svg>

);
