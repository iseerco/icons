import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCupStraw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,5h-9.06l.337-2.686c.095-.749.734-1.314,1.488-1.314h4.235c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-4.235c-1.257,0-2.323.941-2.48,2.189l-.352,2.811H1.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.056l1.656,14.027c.268,2.265,2.188,3.973,4.469,3.973h6.639c2.28,0,4.201-1.708,4.469-3.973l1.656-14.027h1.056c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-3.704,14.91c-.209,1.761-1.703,3.09-3.477,3.09h-6.639c-1.773,0-3.268-1.329-3.477-3.09l-1.642-13.91h16.876l-1.642,13.91Z"/>
</svg>

);
