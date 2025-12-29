import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMusicNoteSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.961,21.84l-2.121,2.121L.039,2.16,2.16.039l9.84,9.84V3c0-1.654,1.346-3,3-3h5v3h-5v9.879l8.961,8.961Zm-15.751-8.681l6.631,6.631c-.583,2.411-2.753,4.21-5.341,4.21-3.033,0-5.5-2.468-5.5-5.5,0-2.587,1.799-4.758,4.21-5.341Zm1.29,2.841c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5,2.5-1.121,2.5-2.5-1.122-2.5-2.5-2.5Z"/>
</svg>

);
