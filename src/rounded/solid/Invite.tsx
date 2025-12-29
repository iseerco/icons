import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Invite = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,8v-1C0,4.239,2.239,2,5,2h1v-1c0-.552.447-1,1-1s1,.448,1,1v1h8v-1c0-.552.447-1,1-1s1,.448,1,1v1h1c2.761,0,5,2.239,5,5v1H0Zm19.5,14c-1.304,0-2.415.836-2.828,2h5.656c-.413-1.164-1.524-2-2.828-2Zm-15,0c-1.304,0-2.415.836-2.828,2h5.656c-.413-1.164-1.524-2-2.828-2Zm-4.5.822v-12.822h24v12.822c-.811-1.669-2.523-2.822-4.5-2.822-2.414,0-4.435,1.721-4.899,4h-5.201c-.465-2.279-2.485-4-4.899-4-1.977,0-3.689,1.153-4.5,2.822Zm17-7.322c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5Zm-15,0c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5Z"/>
</svg>

);
