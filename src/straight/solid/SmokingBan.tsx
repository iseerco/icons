import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SmokingBan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm10,12c0,2.398-.85,4.6-2.262,6.324l-2.325-2.325h1.586v-4h-5.586l-7.738-7.738c1.725-1.412,3.927-2.262,6.324-2.262,5.514,0,10,4.486,10,10Zm-20,0c0-2.398.85-4.6,2.262-6.324l14.062,14.062c-1.725,1.412-3.927,2.262-6.324,2.262-5.514,0-10-4.486-10-10ZM11,4h2c0,.65.453,1.249,1.183,1.562l2.422,1.038c1.455.623,2.395,1.958,2.395,3.4h-2c0-.651-.453-1.25-1.183-1.562l-2.423-1.038c-1.455-.623-2.395-1.958-2.395-3.399Zm1.758,12h-7.758v-4h3.758l4,4Z"/></svg>

);
