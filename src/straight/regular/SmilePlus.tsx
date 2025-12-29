import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SmilePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,6C4.038,6,0,10.038,0,15s4.038,9,9,9,9-4.038,9-9S13.962,6,9,6Zm0,16c-3.86,0-7-3.14-7-7s3.14-7,7-7,7,3.14,7,7-3.14,7-7,7Zm-4-8.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm8,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm11-8.5h-3v3h-2v-3h-3v-2h3V0h2v3h3v2Zm-12.663,12.051l1.33,1.494c-.067.06-1.651,1.455-3.667,1.455s-3.6-1.395-3.667-1.455l1.333-1.491c.007.006,1.093.946,2.333.946s2.326-.939,2.337-.949Z"/></svg>

);
