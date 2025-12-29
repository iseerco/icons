import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotesMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,7v17s20,0,20,0v-2s-18,0-18,0V4.184C.806,4.606.005,5.733,0,7ZM21,0H7c-1.657,0-3,1.343-3,3v17h13v-7h7V3c0-1.657-1.343-3-3-3Zm-3,11h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Zm1,8.414v-4.414h4.414l-4.414,4.414Z"/></svg>

);
