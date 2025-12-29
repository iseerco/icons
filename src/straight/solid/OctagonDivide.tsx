import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OctagonDivide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.121,6.151L17.849.879c-.567-.567-1.32-.879-2.121-.879h-7.456c-.801,0-1.554.312-2.121.879L.879,6.151c-.567.567-.879,1.32-.879,2.121v7.456c0,.801.312,1.554.879,2.121l5.272,5.272c.567.567,1.32.879,2.121.879h7.456c.801,0,1.554-.312,2.121-.879l5.272-5.272c.567-.567.879-1.32.879-2.121v-7.456c0-.801-.312-1.554-.879-2.121Zm-11.121-.151c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm0,12c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm5-5H7v-2h10v2Z"/>
</svg>

);
