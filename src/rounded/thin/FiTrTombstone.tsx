import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTombstone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.511,23h-1.511v-13C22,4.486,17.514,0,12,0S2,4.486,2,10v13H.511c-.28-.003-.505.213-.511.489s.213.505.489.511h23.011c.271,0,.494-.217.5-.489.006-.276-.213-.505-.489-.511ZM3,10C3,5.037,7.038,1,12,1s9,4.037,9,9v13H3v-13Zm13,1c0,.276-.224.5-.5.5h-3v5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-5h-3c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h3v-3c0-.276.224-.5.5-.5s.5.224.5.5v3h3c.276,0,.5.224.5.5Z"/></svg>

);
