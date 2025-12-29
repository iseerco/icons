import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrVolumeDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,12c0-1.909-1.267-3.505-3-4.042V1.5c0-.448-.2-.872-.545-1.157-.346-.285-.803-.404-1.239-.316-3.097.598-6.126,2.512-7.944,4.973h-.771C2.467,5,0,7.467,0,10.5v3.5c0,3.033,2.467,5.5,5.5,5.5h1.143c1.809,2.196,4.696,3.917,7.573,4.473.094.019.189.027.284.027.346,0,.684-.12.955-.343.345-.285.545-.709.545-1.157v-6.458c1.733-.536,3-2.132,3-4.042Zm-6,8.489c-1.768-.721-3.408-1.95-4.386-3.348-.28-.402-.74-.641-1.229-.641h-1.885c-1.378,0-2.5-1.122-2.5-2.5v-3.5c0-1.378,1.122-2.5,2.5-2.5h1.565c.52,0,1.003-.27,1.276-.712.987-1.599,2.739-2.991,4.658-3.777v16.978Z"/></svg>

);
