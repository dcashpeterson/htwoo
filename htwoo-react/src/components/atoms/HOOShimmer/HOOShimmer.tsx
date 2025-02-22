import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export enum HOOShimmerTheme {
  "None",
  "Neutral",
  "Primary",
  "Fancy"
}

export enum HOOShimmerShape {
  "Container",
  "Circle",
  "Row",
  "Square",
  "Image1:1",
  "Image16:9",
  "Image16:10"
}

export interface IHOOShimmerProps extends IHOOStandardProps {
  /**
   * The type of shimmer effect
  */
  shape: HOOShimmerShape;
  /**
   * (Optional) The type of shimmer theme. Required for shape: Container
  */
  theme?: HOOShimmerTheme;
  /**
   * (Optional) Image width, used only with Image shapes
  */
  imageWidth?: number;
  /**
  * (Optional) Image height, used only with Image shapes
 */
  imageHeight?: number;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-* {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOShimmerState {
}

export class HOOShimmerState implements IHOOShimmerState {
  constructor() { }
}

export default class HOOShimmer extends React.Component<IHOOShimmerProps, IHOOShimmerState> {
  private LOG_SOURCE: string = "💦HOOShimmer";
  private _componentClass: string = "hoo-ph";
  private _imageShape: boolean = false;

  constructor(props: IHOOShimmerProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOShimmer";
    switch (props.shape) {
      case HOOShimmerShape.Row:
        this._componentClass = `${this._componentClass}-row`;
        break;
      case HOOShimmerShape.Circle:
        this._componentClass = `${this._componentClass}-circle`;
        break;
      case HOOShimmerShape.Square:
        this._componentClass = `${this._componentClass}-squared`;
        break;
      case HOOShimmerShape["Image1:1"]:
        this._imageShape = true;
        this._componentClass = `${this._componentClass}-img1x1`;
        break;
      case HOOShimmerShape["Image16:9"]:
        this._imageShape = true;
        this._componentClass = `${this._componentClass}-img16x9`;
        break;
      case HOOShimmerShape["Image16:10"]:
        this._imageShape = true;
        this._componentClass = `${this._componentClass}-img16x10`;
        break;
      case HOOShimmerShape.Container:
        switch (props.theme) {
          case HOOShimmerTheme.None:
            this._componentClass = "";
            break;
          case HOOShimmerTheme.Neutral:
            this._componentClass = `${this._componentClass}-neutral`;
            break;
          case HOOShimmerTheme.Primary:
            this._componentClass = `${this._componentClass}-primary`;
            break;
          case HOOShimmerTheme.Fancy:
            this._componentClass = `${this._componentClass}-fancy`;
            break;
        }
        break;
    }
    this.state = new HOOShimmerState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOShimmerProps>, nextState: Readonly<IHOOShimmerState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOShimmerProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <>
          {this._imageShape &&
            <div data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className}>
              {this.props.children}
            </div>
          }
          {!this._imageShape &&
            <img data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes}
              className={className}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              width={this.props.imageWidth}
              height={this.props.imageHeight} />
          }
        </>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}