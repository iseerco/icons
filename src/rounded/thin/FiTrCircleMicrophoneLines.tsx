import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleMicrophoneLines = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm6-11c0,3.14-2.425,5.724-5.5,5.979v1.521c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.521c-3.075-.255-5.5-2.839-5.5-5.979,0-.276.224-.5.5-.5s.5.224.5.5c0,2.757,2.243,5,5,5s5-2.243,5-5c0-.276.224-.5.5-.5s.5.224.5.5Zm-5.996,2.984c1.654,0,3-1.346,3-3v-5c0-1.654-1.346-3-3-3s-3,1.346-3,3v5c0,1.654,1.346,3,3,3Zm-2-8c0-1.103.897-2,2-2s2,.897,2,2h-1.504c-.276,0-.5.224-.5.5s.224.5.5.5h1.504v1h-1.504c-.276,0-.5.224-.5.5s.224.5.5.5h1.504v1h-1.504c-.276,0-.5.224-.5.5s.224.5.5.5h1.504c0,1.103-.897,2-2,2s-2-.897-2-2v-5Z"/>
</svg>

);
