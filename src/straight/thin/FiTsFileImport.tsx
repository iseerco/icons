import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileImport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.707,0H4.5c-1.379,0-2.5,1.122-2.5,2.5v10.5h1V2.5c0-.827.673-1.5,1.5-1.5h9.5v7h7v15H3v-5h-1v6h20V7.293L14.707,0Zm.293,1.707l5.293,5.293h-5.293V1.707Zm-4.133,14.293H0v-1h10.867c-.04-.067-.089-.129-.146-.187l-3.202-3.203.707-.707,3.202,3.203c.769.769.769,2.019,0,2.787l-3.202,3.203-.707-.707,3.202-3.203c.057-.057.106-.12.146-.187Z"/></svg>

);
