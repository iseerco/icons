import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScannerImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.939,15.713L3.116.212l-1.232,1.576,16.901,13.212H3c-1.654,0-3,1.346-3,3v6h24v-6c0-.916-.413-1.736-1.061-2.287Zm-.939,6.287H2v-4c0-.552.448-1,1-1h18c.552,0,1,.448,1,1v4Zm-16-2.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm4,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/>
</svg>

);
