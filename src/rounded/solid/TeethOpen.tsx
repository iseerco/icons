import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TeethOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5C2.239,0,0,2.239,0,5v4c0,1.105.895,2,2,2h20c1.105,0,2-.895,2-2v-4c0-2.761-2.239-5-5-5Zm-1,9v-2.5c0-.828.673-1.5,1.5-1.5s1.5.672,1.5,1.5v2.5h-3Zm-5,0v-3.5c0-.828.673-1.5,1.5-1.5s1.5.672,1.5,1.5v3.5h-3Zm-10,0v-2.5c0-.828.673-1.5,1.5-1.5s1.5.672,1.5,1.5v2.5h-3Zm5,0v-3.5c0-.828.673-1.5,1.5-1.5s1.5.672,1.5,1.5v3.5h-3Zm16,10v-4c0-1.105-.895-2-2-2H2c-1.105,0-2,.895-2,2v4c0,2.761,2.239,5,5,5h14c2.761,0,5-2.239,5-5Zm-3-4v2.5c0,.828-.673,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-2.5h3Zm-5,0v2.5c0,.828-.673,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-2.5h3Zm-10,0v2.5c0,.828-.673,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-2.5s3,0,3,0Zm5,0v2.5c0,.828-.673,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-2.5s3,0,3,0Z"/></svg>

);
