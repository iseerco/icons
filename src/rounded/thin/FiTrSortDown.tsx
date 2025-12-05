import React from 'react';
import type { IconProps } from '../../types';

export const FiTrSortDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,17c-.614,0-1.202-.263-1.613-.72L3.94,9.735c-.454-.495-.564-1.167-.301-1.766,.264-.598,.834-.97,1.487-.97h13.746c.653,0,1.224,.372,1.487,.97,.264,.599,.153,1.271-.288,1.753l-6.475,6.574c-.396,.44-.983,.703-1.598,.703ZM5.127,8c-.255,0-.469,.14-.572,.373-.103,.233-.062,.486,.111,.674l6.449,6.549c.48,.533,1.305,.517,1.754,.017l6.478-6.578c.16-.175,.201-.428,.099-.661-.104-.233-.317-.373-.572-.373H5.127Z"/></svg>
);

FiTrSortDown.displayName = 'FiTrSortDown';
