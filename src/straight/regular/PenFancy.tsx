import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenFancy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3c0-.801-.313-1.555-.879-2.121h0c-1.169-1.168-3.072-1.171-4.243,0l-10.513,10.54-5.705,1.37L.033,23.996l11.203-2.626,1.398-5.734,10.487-10.513c.566-.567.879-1.32.879-2.122ZM4.564,20.879l3.277-3.278-1.414-1.414-3.277,3.277,1.176-5.017,3.611-.868,2.524,2.524-.877,3.599-5.02,1.177ZM21.706,3.708l-10.393,10.419-1.414-1.414L20.293,2.293c.391-.39,1.023-.39,1.414,0h0c.189.189.293.44.293.707s-.104.518-.294.708Z"/></svg>

);
