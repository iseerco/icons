import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoteSticky = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,18h4.54c-.35,.91-.88,1.75-1.59,2.46l-1.48,1.48c-.71,.71-1.55,1.24-2.46,1.59v-4.54c0-.55,.45-1,1-1Zm5-13V15.51c0,.16-.01,.32-.02,.49h-4.98c-1.65,0-3,1.35-3,3v4.98c-.16,.01-.32,.02-.49,.02H5c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h14c2.76,0,5,2.24,5,5Z"/></svg>

);
