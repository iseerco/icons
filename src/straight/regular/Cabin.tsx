import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cabin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.849,7.681l-.849-.664V2h-2v3.451L13.849,.637c-1.089-.85-2.608-.851-3.697,0L1.151,7.68c-.731,.573-1.151,1.435-1.151,2.363v13.957H9V12h6v12h9V10.043c0-.929-.42-1.79-1.151-2.362ZM7,22H2v-2H7v2Zm0-4H2v-2H7v2Zm0-4H2v-2H7v2ZM2.001,10c.012-.293,.15-.563,.383-.745L11.384,2.213c.362-.285,.87-.284,1.232,0l9,7.044c.233,.182,.37,.451,.383,.744H2.001Zm19.999,12h-5v-2h5v2Zm0-4h-5v-2h5v2Zm0-4h-5v-2h5v2ZM13.5,6.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>

);
