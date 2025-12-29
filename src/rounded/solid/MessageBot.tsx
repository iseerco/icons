import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageBot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,10.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-6.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm14.5,1c0,.553-.448,1-1,1h-1v5c0,2.206-1.794,4-4,4h-.852l-3.847,3.18c-.362.322-.825.485-1.292.485-.476,0-.956-.169-1.338-.509l-3.748-3.156h-.923c-2.206,0-4-1.794-4-4v-5h-1c-.552,0-1-.447-1-1s.448-1,1-1h1v-5C2,1.794,3.794,0,6,0h12c2.206,0,4,1.794,4,4v5h1c.552,0,1,.447,1,1Zm-6-2c0-1.105-.895-2-2-2h-8c-1.105,0-2,.895-2,2v5c0,1.105.895,2,2,2h8c1.105,0,2-.895,2-2v-5Z"/></svg>

);
