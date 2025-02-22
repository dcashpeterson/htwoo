import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export enum HOODialogType {
  "Standard",
  "StandardError",
  "StandardSuccess",
  "StandardWarning",
  "SidebarLeft",
  "SidebarRight"
}

export interface IHOODialogProps extends IHOOStandardProps {
  /**
   * Is dialog visible
  */
  type: HOODialogType;
  /**
   * Is dialog visible
  */
  visible: boolean;
  /**
   * Dialog height (e.g. "30vh" or "30%" or "30px"); required for all HOODialogType Standard
  */
  height?: string;
  /**
   * Dialog height (e.g. "40vw" or "40%" or "40px"); required for all HOODialogType
  */
  width?: string;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOODialogState {
}

export class HOODialogState implements IHOODialogState {
  constructor() { }
}

export default class HOODialog extends React.Component<IHOODialogProps, IHOODialogState> {
  private LOG_SOURCE: string = "💦HOODialog";
  private _componentClass: string = "hoo-mdldialog-outer";

  constructor(props: IHOODialogProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODialog";
    switch (props.type) {
      case HOODialogType.StandardError:
        this._componentClass = `${this._componentClass} is-error`;
        break;
      case HOODialogType.StandardSuccess:
        this._componentClass = `${this._componentClass} is-success`;
        break;
      case HOODialogType.StandardWarning:
        this._componentClass = `${this._componentClass} is-warning`;
        break;
      case HOODialogType.SidebarLeft:
        this._componentClass = `${this._componentClass} is-sidebar-left`;
        break;
      case HOODialogType.SidebarRight:
        this._componentClass = `${this._componentClass} is-sidebar-right`;
        break;
    }
    this.state = new HOODialogState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOODialogProps>, nextState: Readonly<IHOODialogState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOODialogProps> {
    try {
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.visible) { className += " is-visible"; }
      let styleBlock = {} as React.CSSProperties;
      if (this.props.width !== undefined) { styleBlock["--lqdDialogWidth"] = this.props.width; }
      if (this.props.height !== undefined) { styleBlock["--lqdDialogHeight"] = this.props.height; }
      return (
        <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
          <div className="hoo-mdldialog" style={styleBlock}>
            {this.props.children}
          </div>
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}