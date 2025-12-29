import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsAltV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,7h6.794L13.448,.611c-.696-.776-2.038-.777-2.736-.002L4.865,7h6.635v10H4.865l5.848,6.391c.348,.387,.846,.609,1.367,.609s1.021-.223,1.365-.607l5.85-6.393h-6.794V7Zm-1.048-5.718l.004-.004c.321-.36,.922-.363,1.251,.004l4.316,4.718H7.135L11.452,1.282Zm1.251,21.439c-.321,.359-.926,.36-1.248,0l-4.32-4.722h9.888l-4.32,4.722Z"/></svg>

);
