import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDocumentCircleArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12.028,24H0V3C0,1.346,1.346,0,3,0H14.381l5.619,5.665v3.711c-.791-.243-1.63-.375-2.5-.375-.169,0-.334,.016-.5,.025v-1.025h-5V3H3V21h6.76c.527,1.163,1.304,2.187,2.268,3Zm11.972-6.5c0,3.59-2.91,6.5-6.5,6.5s-6.5-2.91-6.5-6.5,2.91-6.5,6.5-6.5,6.5,2.91,6.5,6.5Zm-2-.5l-3.793-3.707c-.39-.39-1.024-.39-1.414,0l-3.793,3.707h3v4h3v-4h3Z"/>
</svg>

);
