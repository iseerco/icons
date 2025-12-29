import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm2.901,16.754c-.752,.792-1.81,1.246-2.901,1.246h-3c-.553,0-1-.447-1-1s.447-1,1-1h3c.554,0,1.068-.222,1.45-.623,.382-.402,.576-.93,.547-1.486-.055-1.042-1.026-1.891-2.167-1.891h-2.83c-.553,0-1-.447-1-1v-3c0-1.103,.897-2,2-2h4c.553,0,1,.447,1,1s-.447,1-1,1h-4v2h1.83c2.224,0,4.054,1.663,4.165,3.786,.058,1.11-.331,2.164-1.094,2.968Z"/></svg>

);
