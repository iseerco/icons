import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFilePrescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.707,0H4.5c-1.378,0-2.5,1.122-2.5,2.5v21.5h20V7.293L14.707,0Zm.293,1.707l5.293,5.293h-5.293V1.707ZM3,23V2.5c0-.827.673-1.5,1.5-1.5h9.5v7h7v15H3Zm11.878-9h-1.203l-1.675,2.508-2.487-3.723c.875-.39,1.487-1.267,1.487-2.285,0-1.378-1.122-2.5-2.5-2.5h-2c-.827,0-1.5.673-1.5,1.5v7.5h1v-4h2.454l2.944,4.409-2.398,3.591h1.203l1.797-2.691,1.797,2.691h1.203l-2.398-3.591,2.276-3.409Zm-8.878-4.5c0-.276.224-.5.5-.5h2c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5h-2.5v-2.5Z"/></svg>

);
