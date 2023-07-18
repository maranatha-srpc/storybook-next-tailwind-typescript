import React, {useEffect, useState} from 'react';

export interface ITopicButtonProps {
  topicName?: any;
  icon?: string;
  tw?: string;
  twButtonText?: string;
  size?: number | string;
  onClick?: (topicName: string) => void;
  children?: JSX.Element | JSX.Element[];
  type?: 'button' | 'submit' | 'reset';
  dataDrawerTarget?: string;
  dataDrawerPlacement?: string;
  dataDrawerShow?: string;
  dataDrawerHide?: string;
  dataModalHide?: string;
  dataTestId?: string;
  ariaControls?: string;
  ariaLabel?: string;
  ariaHasPopup?: boolean;
  disabled?: boolean;
}


export const Button = ({
  topicName,
  icon,
  tw,
  size,
  onClick,
  children,
  dataDrawerTarget,
  dataDrawerPlacement,
  dataDrawerShow,
  dataDrawerHide,
  dataModalHide,
  dataTestId = '',
  ariaControls,
  ariaLabel,
  ariaHasPopup,
  type,
  twButtonText,
  disabled,
}: ITopicButtonProps) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick(topicName);
    } else {
      console.warn(
        `no click handler defined on topic button with topic ${topicName}`,
      );
    }
  };

  return (
    <button
      className={tw}
      type={type ? type : 'button'}
      onClick={onClickHandler}
      data-drawer-target={dataDrawerTarget}
      data-drawer-placement={dataDrawerPlacement}
      data-drawer-show={dataDrawerShow}
      data-drawer-hide={dataDrawerHide}
      data-modal-hide={dataModalHide}
      data-testid={dataTestId}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      disabled={disabled}
    >
      <i className={icon} style={{ fontSize: size }}></i>
      {children}
      <span className={twButtonText}>{topicName}</span>
    </button>
  )
}

export default Button;