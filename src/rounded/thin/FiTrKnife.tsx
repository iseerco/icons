import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrKnife = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.972,.122c-.669-.266-1.427-.096-1.937,.441L.133,23.16c-.188,.203-.175,.52,.028,.707,.096,.089,.218,.133,.339,.133,.134,0,.269-.054,.367-.16l5.388-5.825c13.488-1.041,17.744-12.73,17.744-15.967v-.367c0-.708-.393-1.306-1.027-1.559Zm.027,1.926c0,2.942-3.801,13.348-15.718,14.858L21.765,1.247c.173-.182,.379-.247,.562-.247,.102,0,.197,.021,.274,.051,.149,.06,.398,.221,.398,.628v.369Z"/></svg>

);
