import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileAudio = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.114,14l3.886-2.564v9.125l-3.886-2.561h-2.114v-4h2.114Zm5.886,0v4c1.105,0,2-.895,2-2s-.895-2-2-2Zm7-6.414v16.414H2V3c0-1.654,1.346-3,3-3h9.414l7.586,7.586Zm-7-.586h3.586l-3.586-3.586v3.586Zm5,15v-13h-7V2H5c-.552,0-1,.449-1,1v19h16Z"/></svg>

);
