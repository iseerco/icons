import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flatbread = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-6.707,10.293l5.5-5.5c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-5.5,5.5c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414Zm2.417,7.411c-.195.197-.453.296-.71.296-.255,0-.51-.097-.704-.29-.393-.39-.395-1.022-.006-1.414l10.013-10.09c.39-.392,1.024-.393,1.414-.005.393.389.395,1.022.006,1.415l-10.013,10.089Zm10.997-3.997l-5,5c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l5-5c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Z"/>
</svg>

);
