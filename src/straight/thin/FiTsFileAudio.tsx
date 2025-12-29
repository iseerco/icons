import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileAudio = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,13v5h2.356l4.644,2.902v-10.805l-4.644,2.902h-2.356Zm6-1.098v7.195l-3.356-2.098h-1.644v-3h1.644l3.356-2.098Zm4.5,3.598c0,1.378-1.121,2.5-2.5,2.5v-1c.827,0,1.5-.673,1.5-1.5s-.673-1.5-1.5-1.5v-1c1.379,0,2.5,1.122,2.5,2.5ZM14.707,0H4.5c-1.379,0-2.5,1.122-2.5,2.5v21.5h20V7.293L14.707,0Zm.293,1.707l5.293,5.293h-5.293V1.707ZM3,23V2.5c0-.827.673-1.5,1.5-1.5h9.5v7h7v15H3Z"/></svg>

);
