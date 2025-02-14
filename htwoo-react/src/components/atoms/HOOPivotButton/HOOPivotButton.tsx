import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOPivotButtonProps extends IHOOStandardProps {
  /**
   * Pivot Button label
  */
  label: string;
  /**
   * Is Pivot Button active
  */
  isActive: boolean;
  /**
   * (Optional) HTMLButtonElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLButtonElement>;
}

export interface IHOOPivotButtonState {
}

export class HOOPivotButtonState implements IHOOPivotButtonState {
  constructor() { }
}

export default class HOOPivotButton extends React.Component<IHOOPivotButtonProps, IHOOPivotButtonState> {
  private LOG_SOURCE: string = "💦HOOPivotButton";
  private _componentClass: string = "hoo-button-pivot";

  constructor(props: IHOOPivotButtonProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOPivotButton";
    this.state = new HOOPivotButtonState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOPivotButtonProps>, nextState: Readonly<IHOOPivotButtonState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOPivotButtonProps> {
    try {
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.isActive) {
        className += " isActive";
      }
      return (
        <button data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <div className="hoo-pivot-inner" title={this.props.label}>
            {this.props.label}
          </div>
        </button>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}