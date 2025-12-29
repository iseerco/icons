import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AutoReply = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm3,7h-3v2.454l-2.687-2.687c-.417-.417-.417-1.093,0-1.51l2.687-2.688v2.431h3v2Zm-10.931,0h-2.294l-4.479,2.669c-.634,.425-1.483,.445-2.162,.08-.7-.375-1.135-1.1-1.135-1.894V3C0,1.346,1.346,0,3,0H19c1.654,0,3,1.346,3,3V11.079c-1.178-.682-2.541-1.079-4-1.079-4.418,0-8,3.582-8,8,0,.339,.028,.672,.069,1Z"/>
</svg>

);
