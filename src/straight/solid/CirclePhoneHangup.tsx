import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CirclePhoneHangup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm8,14h-4.571v-3.216c-1.221-.521-2.339-.777-3.429-.784-1.146-.007-2.26,.261-3.429,.784v3.216H4v-2.455c0-.878,.37-1.664,.946-2.24,1.494-1.494,4.266-2.292,7.054-2.305,2.731-.012,5.478,.728,7.055,2.305,.576,.576,.946,1.362,.945,2.24v2.455Z"/></svg>

);
