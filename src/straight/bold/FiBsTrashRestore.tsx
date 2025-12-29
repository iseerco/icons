import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashRestore = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,3h-5v-.5c0-1.378-1.121-2.5-2.5-2.5h-7c-1.379,0-2.5,1.122-2.5,2.5v.5H1v3h1.62l1.233,14.79c.149,1.8,1.682,3.21,3.487,3.21h9.32c1.806,0,3.338-1.41,3.487-3.209l1.233-14.791h1.62v-3Zm-5.843,17.542c-.021.257-.239.458-.497.458H7.34c-.258,0-.476-.201-.497-.458l-1.212-14.542h12.739l-1.212,14.542Zm-6.657-7.542h-3l3.793-3.707c.391-.39,1.024-.39,1.414,0l3.793,3.707h-3v5h-3v-5Z"/></svg>

);
