import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTablePivot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,7H.025C.264,4.366,2.366,2.264,5,2.025V7Zm16,1.5c0,.828,.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1c0-3.032-2.467-5.5-5.5-5.5H8V7h13v1.5Zm-10.5,10.5H5.5c-.171,0-.338-.018-.5-.051V10H0v6.5c0,3.032,2.467,5.5,5.5,5.5h5c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Zm13.298-5.434l-2.082-2.082c-.646-.646-1.694-.646-2.34,0l-2.082,2.082c-.529,.529-.154,1.434,.594,1.434h1.112v1.5c0,.275-.224,.5-.5,.5h-1.5v-1.158c0-.749-.904-1.123-1.433-.594l-2.082,2.082c-.646,.646-.646,1.694,0,2.34l2.082,2.082c.529,.529,1.433,.154,1.433-.594v-1.158h1.5c1.93,0,3.5-1.57,3.5-3.5v-1.5h1.204c.749,0,1.123-.905,.594-1.434Z"/></svg>

);
