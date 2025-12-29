import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileDownload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.414,0H5c-1.654,0-3,1.346-3,3v21h20V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586v-3.586Zm5,18.586H4V3c0-.551.448-1,1-1h8v7h7v13Zm-7-4.993l2.291-2.302,1.414,1.414-3.299,3.299c-.388.388-.897.581-1.406.581s-1.019-.193-1.406-.581l-3.299-3.299,1.414-1.414,2.291,2.291v-5.997h2v6.008Z"/></svg>

);
