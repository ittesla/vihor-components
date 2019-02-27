// @flow

import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import styles from './style'

type Props = {
  renderViewMore?: Function,
  renderViewLess?: Function,
  afterCollapse?: Function,
  afterExpand?: Function,
  numberOfLines: number,
  textStyle?: Object | number,
  disableFooter?: boolean,
  onShowMoreChange?: Function,
  textStyle: any,
  children: any
}

type State = {
  isFulltextShown: boolean,
  numberOfLines: any
}

const noop = () => {
}

class ViewMoreText extends Component<Props, State> {
  static defaultProps = {
    afterCollapse: noop,
    afterExpand: noop,
    textStyle: {}
  }

  trimmedTextHeight = null;
  fullTextHeight = null;
  shouldShowMore = false;

  state = {
    isFulltextShown: true,
    numberOfLines: this.props.numberOfLines
  }

  hideFullText = () => {
    if (
      this.state.isFulltextShown &&
      this.trimmedTextHeight &&
      this.fullTextHeight
    ) {
      this.shouldShowMore = this.trimmedTextHeight < this.fullTextHeight;
      this.setState({
        isFulltextShown: false
      })
      if (typeof this.props.onShowMoreChange === 'function') {
        this.props.onShowMoreChange(this.shouldShowMore)
      }
    }
  }

  onLayoutTrimmedText = (event: Object) => {
    const {
      height
    } = event.nativeEvent.layout;

    this.trimmedTextHeight = height;
    this.hideFullText();
  }

  onLayoutFullText = (event: Object) => {
    const {
      height
    } = event.nativeEvent.layout;

    this.fullTextHeight = height;
    this.hideFullText();
  }

  showMore = () => {
    this.onPressMore()
  }

  showLess = () => {
    this.onPressLess()
  }

  onPressMore = () => {
    this.setState({
      numberOfLines: null
    }, () => {
      if (typeof this.props.afterExpand === 'function') {
        this.props.afterExpand()
      }
    });
  }

  onPressLess = () => {
    this.setState({
      numberOfLines: this.props.numberOfLines
    }, () => {
      if (typeof this.props.afterCollapse === 'function') {
        this.props.afterCollapse()
      }
    });
  }

  getWrapperStyle = () => {
    if (this.state.isFulltextShown) {
      return styles.transparent;
    }
    return {};
  }

  renderViewMore = () => (
    <Text
      style={styles.viewMoreText}
      onPress={this.onPressMore}
    >
      View More
    </Text>
  )

  renderViewLess = () => (
    <Text
      style={styles.viewMoreText}
      onPress={this.onPressLess}
    >
      View Less
    </Text>
  )

  renderFooter = () => {
    const {
      numberOfLines
    } = this.state

    const renderViewMore: Function =
      (typeof this.props.renderViewMore === 'function')
        ? this.props.renderViewMore
        : this.renderViewMore
    const renderViewLess: Function =
      (typeof this.props.renderViewLess === 'function')
        ? this.props.renderViewLess
        : this.renderViewLess

    if (this.shouldShowMore === true && this.props.disableFooter === false) {
      if (numberOfLines > 0) {
        return renderViewMore(this.onPressMore)
      }
      return renderViewLess(this.onPressLess)
    }
    return null;
  }

  renderFullText = () => {
    if (this.state.isFulltextShown) {
      return (
        <View onLayout={this.onLayoutFullText} style={styles.fullTextWrapper}>
          <Text style={this.props.textStyle}>{this.props.children}</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={this.getWrapperStyle()}>
        <View onLayout={this.onLayoutTrimmedText}>
          <Text
            style={this.props.textStyle}
            numberOfLines={this.state.numberOfLines}
          >
            {this.props.children}
          </Text>
          {this.renderFooter()}
        </View>

        {this.renderFullText()}
      </View>
    );
  }
}

export default ViewMoreText;