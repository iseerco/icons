import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPenSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.09,9.673l3.25,3.25-3.808,3.808c-.813.813-1.915,1.269-3.064,1.269h-.955c-.276,0-.5-.224-.5-.5v-.955c0-1.149.457-2.252,1.269-3.064l3.808-3.808Zm3-3l-.879.879,3.25,3.25.786-.786c.85-.85,1.013-2.236.252-3.167-.875-1.07-2.456-1.129-3.409-.176Zm9.91-1.173v13c0,3.032-2.467,5.5-5.5,5.5H5.5c-3.033,0-5.5-2.468-5.5-5.5V5.5C0,2.468,2.467,0,5.5,0h13c3.033,0,5.5,2.468,5.5,5.5Zm-3,0c0-1.379-1.122-2.5-2.5-2.5H5.5c-1.378,0-2.5,1.121-2.5,2.5v13c0,1.379,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.121,2.5-2.5V5.5Z"/></svg>

);
