import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";
import { getRandomString } from "../../Common";

export interface IHOORadioButtonProps extends IHOOStandardProps {
  /**
   * Radio checked.
  */
  checked: boolean;
  /**
   * Radio value.
  */
  value: string | number;
  /**
   * Change event handler
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * (Optional) RadioButton label. If omitted, children will be inserted.
  */
  label?: string;
  /**
   * (Optional) Is checkbox disabled - default false.
   */
  disabled?: boolean;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.
   * Class names will be appended to the end of the default class string - hoo-radio {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLInputElement>;
  /**
   * (Optional) HTMLInputElement attributes that will be applied to the label element of the component. Use to override for, class, and other attributes.
  */
  labelElementAttributes?: React.HTMLAttributes<HTMLLabelElement>;
}

export interface IHOORadioButtonState {
}

export class HOORadioButtonState implements IHOORadioButtonState {
  constructor() { }
}

export default class HOORadioButton extends React.Component<IHOORadioButtonProps, IHOORadioButtonState> {
  private LOG_SOURCE: string = "💦HOORadioButton";
  private _componentClass: string = "hoo-radio";
  private _radioId: string = "hoo-radio-";

  constructor(props: IHOORadioButtonProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOORadioButton";
    this._radioId += getRandomString(10);
    this.state = new HOORadioButtonState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOORadioButtonProps>, nextState: Readonly<IHOORadioButtonState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOORadioButtonProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <>
          <input data-component={this.LOG_SOURCE} type="radio" id={this._radioId} checked={this.props.checked} value={this.props.value} {...this.props.rootElementAttributes} className={className} disabled={this.props.disabled || false} aria-disabled={this.props.disabled || false} />
          <label htmlFor={this._radioId} {...this.props.labelElementAttributes}>
            {this.props.label &&
              this.props.label
            }
            {!this.props.label &&
              this.props.children
            }
          </label>
        </>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}