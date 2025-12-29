import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v17.5Zm-10.872-5h7.872v3h-9.797c-.894,0-1.692-.534-2.034-1.359-.342-.826-.154-1.768.478-2.399l7.225-7.241h-7.872v-3h9.797c.894,0,1.692.534,2.034,1.359.342.826.154,1.768-.478,2.399l-7.225,7.241Z"/></svg>

);
