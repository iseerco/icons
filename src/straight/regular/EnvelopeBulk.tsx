import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnvelopeBulk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9c0-1.654-1.346-3-3-3h-2V3c0-1.654-1.346-3-3-3H6c-1.654,0-3,1.346-3,3V11c-1.654,0-3,1.346-3,3v10H16v-5h8V9ZM5,3c0-.552,.449-1,1-1h10c.551,0,1,.448,1,1v3h-6c-1.654,0-3,1.346-3,3v2h-3V3Zm7.587,10l-3.591,3.591c-.527,.527-1.446,.527-1.975,0l-3.591-3.591H12.587Zm1.413,9H2v-7.602l3.606,3.607c.642,.642,1.495,.995,2.402,.995s1.761-.354,2.402-.995l3.59-3.59v7.585Zm8-5h-6v-3c0-1.654-1.346-3-3-3h-3v-2c0-.552,.449-1,1-1h10c.551,0,1,.448,1,1v8Zm-4-7h2v2h-2v-2Z"/></svg>

);
