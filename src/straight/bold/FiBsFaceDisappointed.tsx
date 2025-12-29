import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFaceDisappointed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.037,9,9-4.037,9-9,9Zm0-6c2.094,0,3.718,1.164,3.896,1.297l-1.791,2.406s-.987-.703-2.104-.703-2.103,.702-2.112,.709l-1.783-2.412c.178-.133,1.802-1.297,3.896-1.297Zm-1.491-2.031l-4,1.442-1.018-2.822,4-1.442,1.018,2.822Zm8-1.38l-1.018,2.822-4-1.442,1.018-2.822,4,1.442Z"/></svg>

);
