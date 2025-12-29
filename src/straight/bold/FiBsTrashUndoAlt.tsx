import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashUndoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.293,11.793l3.707-3.793v3h1.5c1.93,0,3.5,1.57,3.5,3.5v3.5h-3v-3.5c0-.276-.225-.5-.5-.5h-1.5v3l-3.707-3.793c-.39-.39-.39-1.024,0-1.414Zm15.707-5.793h-2v15.5c0,1.378-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.122-2.5-2.5V6H1v-3h5v-.5c0-1.378,1.121-2.5,2.5-2.5h7c1.379,0,2.5,1.122,2.5,2.5v.5h5v3Zm-5,0H6v15h12V6Z"/></svg>

);
