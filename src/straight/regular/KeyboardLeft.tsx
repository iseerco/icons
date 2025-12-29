import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeyboardLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3v2h-14.5c-.276,0-.5.224-.5.5v13.5h15v2H7V5.5c0-1.378,1.122-2.5,2.5-2.5h14.5Zm-9.988,8.036l-3-.036-.024,2,3,.036.024-2Zm1.988,1.964h3v-2h-3v2Zm5,0h3v-2h-3v2Zm-7.012-6.036l-3,.036.024,2,3-.036-.024-2Zm5.012.036h-3v2h3v-2Zm2,2h3v-2h-3v2Zm-6,8h9v-2h-9v2Zm-2,0v-2h-2v2h2ZM3.879,7.293l-3.293,3.293c-.78.78-.78,2.048,0,2.828l3.293,3.293,1.414-1.414-3.293-3.293,3.293-3.293-1.414-1.414Z"/>
</svg>

);
