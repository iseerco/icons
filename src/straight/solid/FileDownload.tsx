import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileDownload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,7V0H5c-1.657,0-3,1.343-3,3v21h20V7h-7Zm-1.594,12.417c-.388.388-.897.581-1.406.581s-1.019-.193-1.406-.581l-3.299-3.299,1.414-1.414,2.291,2.291v-5.997h2v6.008l2.291-2.302,1.414,1.414-3.299,3.299Zm8.008-14.417h-4.414V.586l4.414,4.414Z"/></svg>

);
