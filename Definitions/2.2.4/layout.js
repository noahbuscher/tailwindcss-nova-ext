'use strict'

const FUNCTIONS = require('../../Scripts/functions.js')

exports.twClasses = function twClasses(config) {
  /*        CONTAINER CLASSES        */

  let container = [
    {
      label:         'container',
      detail:        'width: 100%; / max-width: breakpoint;',
      documentation: 'Set an element\'s width to 100% or max-width to a prefixed responsive variant (breakpoint).'
    }
  ]

  /*        BOX-SIZING CLASSES        */

  let boxDecorationBreak = [
    {
      label:         'decoration-slice',
      detail:        'box-decoration-break: slice;',
      documentation: 'Set an element\'s properties, such as background and border, to render as one continuous fragment.'
    },
    {
      label:         'decoration-clone',
      detail:        'box-decoration-break: clone;',
      documentation: 'Set an element\'s properties, such as background and border, to render as distinct blocks.'
    }
  ]

  /*        BOX-SIZING CLASSES        */

  let boxSizing = [
    {
      label:         'box-border',
      detail:        'box-sizing: border-box;',
      documentation: 'Set an element\'s box-sizing to border-box to include an element\'s borders and padding in a specified height or width.'
    },
    {
      label:         'box-content',
      detail:        'box-sizing: content-box;',
      documentation: 'Set an element\'s box-sizing to content-box to exclude an element\'s borders and padding in a specified height or width.'
    }
  ]

  /*        DISPLAY CLASSES        */

  let display = [
    {
      label:         'block',
      detail:        'display: block;',
      documentation: 'Create a block-level element.'
    },
    {
      label:         'inline-block',
      detail:        'display: inline-block;',
      documentation: 'Create an inline block-level element.'
    },
    {
      label:         'inline',
      detail:        'display: inline;',
      documentation: 'Create an inline element.'
    },
    {
      label:         'flex',
      detail:        'display: flex;',
      documentation: 'Create a block-level flex container.'
    },
    {
      label:         'inline-flex',
      detail:        'display: inline-flex;',
      documentation: 'Create an inline flex container.'
    },
    {
      label:         'table',
      detail:        'display: table;',
      documentation: 'Create an element that behaves like a table element.'
    },
    {
      label:         'inline-table',
      detail:        'display: inline-table;',
      documentation: 'Create an element that behaves like an inline table element.'
    },
    {
      label:         'table-caption',
      detail:        'display: table-caption;',
      documentation: 'Create an element that behaves like a table-caption element.'
    },
    {
      label:         'table-cell',
      detail:        'display: table-cell;',
      documentation: 'Create an element that behaves like a table-cell element.'
    },
    {
      label:         'table-column',
      detail:        'display: table-column;',
      documentation: 'Create an element that behaves like a table-column element.'
    },
    {
      label:         'table-column-group',
      detail:        'display: table-column-group;',
      documentation: 'Create an element that behaves like a table-column-group element.'
    },
    {
      label:         'table-footer-group',
      detail:        'display: table-block;',
      documentation: 'Create an element that behaves like a table-footer-group element.'
    },
    {
      label:         'table-header-group',
      detail:        'display: table-header-group;',
      documentation: 'Create an element that behaves like a table-header-group element.'
    },
    {
      label:         'table-row-group',
      detail:        'display: table-row-group;',
      documentation: 'Create an element that behaves like a table-row-group element.'
    },
    {
      label:         'table-row',
      detail:        'display: table-row;',
      documentation: 'Create an element that behaves like a table-row element.'
    },
    {
      label:         'flow-root',
      detail:        'display: flow-root;',
      documentation: 'Create a block-level element with its own block formatting context.'
    },
    {
      label:         'grid',
      detail:        'display: grid;',
      documentation: 'Create a grid container.'
    },
    {
      label:         'inline-grid',
      detail:        'display: inline-grid;',
      documentation: 'Create an inline grid container.'
    },
    {
      label:         'contents',
      detail:        'display: contents;',
      documentation: 'Create a \'phantom\' container whose children act like direct children of the parent.'
    },
    {
      label:         'list-item',
      detail:        'display: list-item;',
      documentation: 'Create an element that behaves like a list-item element.'
    },
    {
      label:         'hidden',
      detail:        'display: none;',
      documentation: 'Set an element to display: none and remove it from the page layout (compare to .invisible class, which sets visbility).'
    },
  ]

  /*        FLOAT CLASSES        */

  let floats = [
    {
      label:         'float-right',
      detail:        'float: right;',
      documentation: 'Float an element to the right of its container.'
    },
    {
      label:         'float-left',
      detail:        'float: left;',
      documentation: 'Float an element to the left of its container.'
    },
    {
      label:         'float-none',
      detail:        'float: none;',
      documentation: 'Reset any floats that are applied to an element. This is the default value for the float property.'
    }
  ]

  /*        CLEAR CLASSES        */

  let clear = [
    {
      label:         'clear-left',
      detail:        'clear: left;',
      documentation: 'Position an element below any preceding left-floated elements.'
    },
    {
      label:         'clear-right',
      detail:        'clear: right;',
      documentation: 'Position an element below any preceding right-floated elements.'
    },
    {
      label:         'clear-both',
      detail:        'clear: both;',
      documentation: 'Position an element below all preceding floated elements.'
    },
    {
      label:         'clear-none',
      detail:        'clear: none;',
      documentation: 'Reset any clears that are applied to an element. This is the default value for the clear property.'
    },
  ]

  /*        ISOLATION CLASSES        */

  let isolation = [
    {
      label:         'isolate',
      detail:        'isolation: isolate;',
      documentation: 'Set an element to explicitly create a new stacking context.'
    },
    {
      label:         'isolate-auto',
      detail:        'isolation: auto;',
      documentation: 'Set an element to create a new stacking context only if one of the properties applied requires it.'
    },
  ]

  /*        OBJECT FIT CLASSES        */

  let objectFit = [
    {
      label:         'object-contain',
      detail:        'object-fit: contain;',
      documentation: 'Resize an element\'s content to stay contained within its container.'
    },
    {
      label:         'object-cover',
      detail:        'object-fit: cover;',
      documentation: 'Resize an element\'s content to cover its container proportionately.'
    },
    {
      label:         'object-fill',
      detail:        'object-fit: fill;',
      documentation: 'Stretch an element\'s content to fit its container.'
    },
    {
      label:         'object-none',
      detail:        'object-fit: none;',
      documentation: 'Display an element\'s content at its original size ignoring the container size.'
    },
    {
      label:         'object-scale-down',
      detail:        'object-fit: scale-down;',
      documentation: 'Display an element\'s content at its original size but scale it down to fit its container if necessary.'
    },
  ]

  /*        OBJECT-POSITION CLASSES        */

  const OBJECT_POSITIONS = ['bottom', 'center', 'left', 'left-bottom',
    'left-top', 'right', 'right-bottom', 'right-top', 'top']

  let objectPosition = []

  for(let i = 0; i < OBJECT_POSITIONS.length; i++) {
    objectPosition.push(
      {
        label:         `object-${OBJECT_POSITIONS[i]}`,
        detail:        `object-position: ${OBJECT_POSITIONS[i]};`,
        documentation: `Position a replaced element's content in the ${OBJECT_POSITIONS[i]} of its container.`
      }
    )
  }

  /*        OVERFLOW CLASSES        */

  let overflow = [
    {
      label:         'overflow-auto',
      detail:        'overflow: auto;',
      documentation: 'Add scrollbars to an element if its content overflows the bounds of that element.'
    },
    {
      label:         'overflow-hidden',
      detail:        'overflow: hidden;',
      documentation: 'Clip any content within an element that overflows the bounds of that element.'
    },
    {
      label:         'overflow-visible',
      detail:        'overflow: visible;',
      documentation: 'Prevent content within an element from being clipped. Content overflowing the bounds of an element will then be visible.'
    },
    {
      label:         'overflow-scroll',
      detail:        'overflow: scroll;',
      documentation: 'Add scrollbars to an element, regardless of whether or not its content overflows.'
    },
    {
      label:         'overflow-x-auto',
      detail:        'overflow-x: auto;',
      documentation: 'Allow horizontal scrolling if needed.'
    },
    {
      label:         'overflow-y-auto',
      detail:        'overflow-y: auto;',
      documentation: 'Allow vertical scrolling if needed.'
    },
    {
      label:         'overflow-x-hidden',
      detail:        'overflow-x: hidden;',
      documentation: 'Clip any content within an element that overflows the bounds of that element on the left or right.'
    },
    {
      label:         'overflow-y-hidden',
      detail:        'overflow-y: hidden;',
      documentation: 'Clip any content within an element that overflows the bounds of that element on the top or bottom.'
    },
    {
      label:         'overflow-x-visible',
      detail:        'overflow-x: visible;',
      documentation: 'Prevent content within an element from being clipped on the left or right.'
    },
    {
      label:         'overflow-y-visible',
      detail:        'overflow-y: visible;',
      documentation: 'Prevent content within an element from being clipped on the top or bottom.'
    },
    {
      label:         'overflow-x-scroll',
      detail:        'overflow-x: scroll;',
      documentation: 'Allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the OS.'
    },
    {
      label:         'overflow-y-scroll',
      detail:        'overflow-y: scroll;',
      documentation: 'Allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the OS.'
    }
  ]

  /*        OVERSCROLL BEHAVIOR CLASSES        */

  let overscollBehavior = [
    {
      label:         'overscroll-auto',
      detail:        'overscroll-behavior: auto;',
      documentation: 'Make it possible to continue scrolling a parent scroll area when the boundary of the primary scroll area is reached.'
    },
    {
      label:         'overscroll-contain',
      detail:        'overscroll-behavior: contain;',
      documentation: 'Prevent scolling in the target area from triggering scrolling in the parent element, but preserve bounce effects.'
    },
    {
      label:         'overscroll-none',
      detail:        'overscroll-behavior: none;',
      documentation: 'Prevent scrolling in the target area from triggering scrolling in the parent element, and prevent bounce effects.'
    },
    {
      label:         'overscroll-y-auto',
      detail:        'overscroll-behavior-y: auto;',
      documentation: 'Make is possible to continue scrolling a parent scroll area vertically when the boundary of the primary scroll area is reached.'
    },
    {
      label:         'overscroll-y-contain',
      detail:        'overscroll-behavior-y: contain;',
      documentation: 'Prevent vertical scrolling in the target area from triggering scrolling in the parent element, but preserve bounce effects.'
    },
    {
      label:         'overscroll-y-none',
      detail:        'overscroll-behavior-y: none;',
      documentation: 'Prevent vertical scrolling in the target area from triggering scrolling in the parent element, and prevent bounce effects.'
    },
    {
      label:         'overscroll-x-auto',
      detail:        'overscroll-behavior-x: auto;',
      documentation: 'Make it possible to continue scrolling a parent scroll area horizontally when boundary primary scroll area is reached.'
    },
    {
      label:         'overscroll-x-contain',
      detail:        'overscroll-behavior-x: contain;',
      documentation: 'Prevent horizontal scolling in the target area from triggering scrolling in the parent element, but preserve bounce effects.'
    },
    {
      label:         'overscroll-x-none',
      detail:        'overscroll-behavior-x: none;',
      documentation: 'Prevent horizontal scrolling in the target area from triggering scrolling in the parent element, and prevent bounce effects.'
    },
  ]

  /*        POSITION CLASSES        */

  let position = [
    {
      label:         'static',
      detail:        'position: static;',
      documentation: 'Position an element according to the normal flow of the document.'
    },
    {
      label:         'fixed',
      detail:        'position: fixed;',
      documentation: 'Position an element relative to the browser window.'
    },
    {
      label:         'absolute',
      detail:        'position: absolute;',
      documentation: 'Position an element outside the normal document flow, causing neighboring elements to act like it doesn\'t exist.'
    },
    {
      label:         'relative',
      detail:        'position: relative;',
      documentation: 'Position an element according to normal document flow. It will act as a reference for absolutely positioned children.'
    },
    {
      label:         'sticky',
      detail:        'position: sticky;',
      documentation: 'Position an element as relative until it crosses a specified threshold, then treat as fixed until its parent is off screen.'
    }
  ]

  /*        TOP/RIGHT/BOTTOM/LEFT CLASSES        */

  let topRightBottomLeft = []

  function addInsetClass(name, value, classPrefix = '', valuePrefix = '') {
    return {
      label:         `${classPrefix}inset-${name}`,
      detail:        `top: ${valuePrefix}${value}; right: ${valuePrefix}${value}; bottom: ${valuePrefix}${value}; left: ${valuePrefix}${value};`,
      documentation: `Set an absolutely positioned element ${valuePrefix}${value} from all edges of the nearest positioned parent.`
    }
  }

  function addInsetXClass(name, value, classPrefix = '', valuePrefix = '') {
    return {
      label:         `${classPrefix}inset-x-${name}`,
      detail:        `right: ${valuePrefix}${value}; left: ${valuePrefix}${value};`,
      documentation: `Set an absolutely positioned element ${valuePrefix}${value} from the left and right edges of the nearest positioned parent.`
    }
  }

  function addInsetYClass(name, value, classPrefix = '', valuePrefix = '') {
    return {
      label:         `${classPrefix}inset-y-${name}`,
      detail:        `top: ${valuePrefix}${value}; bottom: ${valuePrefix}${value};`,
      documentation: `Set an absolutely positioned element ${valuePrefix}${value} from the top and bottom edges of the nearest positioned parent.`
    }
  }

  function addTopClass(name, value, classPrefix = '', valuePrefix = '') {
    return {
      label:         `${classPrefix}top-${name}`,
      detail:        `top: ${valuePrefix}${value};`,
      documentation: `Set an absolutely positioned element ${valuePrefix}${value} from the top edge of the nearest positioned parent.`
    }
  }

  function addRightClass(name, value, classPrefix = '', valuePrefix = '') {
    return {
      label:         `${classPrefix}right-${name}`,
      detail:        `right: ${valuePrefix}${value};`,
      documentation: `Set an absolutely positioned element ${valuePrefix}${value} from the right edge of the nearest positioned parent.`
    }
  }

  function addBottomClass(name, value, classPrefix = '', valuePrefix = '') {
    return {
      label:         `${classPrefix}bottom-${name}`,
      detail:        `bottom: ${valuePrefix}${value};`,
      documentation: `Set an absolutely positioned element ${valuePrefix}${value} from the bottom edge of the nearest positioned parent.`
    }
  }

  function addLeftClass(name, value, classPrefix = '', valuePrefix = '') {
    return {
      label:         `${classPrefix}left-${name}`,
      detail:        `left: ${valuePrefix}${value};`,
      documentation: `Set an absolutely positioned element ${valuePrefix}${value} from the left edge of the nearest positioned parent.`
    }
  }

  function addTopRightBottomLeftClasses(scaleArray, isFractional = false) {
    let classArray = []

    scaleArray.forEach((scale, index) => {
      let negativeClassPrefix, negativeValuePrefix

      if (scale.name !== '0') {
        negativeClassPrefix = '-'
        negativeValuePrefix = '-'
      } else {
        negativeClassPrefix = '-'
        negativeValuePrefix = ''
      }

      // Add auto classes
      if (isFractional && index == 0) {
        classArray.push(
          {
            label:         'inset-auto',
            detail:        'top: auto; right: auto; bottom: auto; left: auto;',
            documentation: 'Let the browser determine the top, right, bottom, and left position of an absolutely positioned element.'
          },
          {
            label:         'inset-x-auto',
            detail:        'right: auto; left: auto;',
            documentation: 'Let the browser determine the left and right position of an absolutely positioned element.'
          },
          {
            label:         'inset-y-auto',
            detail:        'top: auto; bottom: auto;',
            documentation: 'Let the browser determine the top and bottom position of an absolutely positioned element.'
          },
          {
            label:         'top-auto',
            detail:        'top: auto;',
            documentation: 'Let the browser determine the top position of an absolutely positioned element.'
          },
          {
            label:         'right-auto',
            detail:        'right: auto;',
            documentation: 'Let the browser determine the right position of an absolutely positioned element.'
          },
          {
            label:         'bottom-auto',
            detail:        'bottom: auto;',
            documentation: 'Let the browser determine the bottom position of an absolutely positioned element.'
          },
          {
            label:         'left-auto',
            detail:        'left: auto;',
            documentation: 'Let the browser determine the left position of an absolutely positioned element.'
          }
        )
      }

      // Add inset classes
      classArray.push(addInsetClass(scale.name, scale.value))
      classArray.push(addInsetClass(scale.name, scale.value, negativeClassPrefix, negativeValuePrefix))

      // Add inset-x classes
      classArray.push(addInsetXClass(scale.name, scale.value))
      classArray.push(addInsetXClass(scale.name, scale.value, negativeClassPrefix, negativeValuePrefix))

      // Add inset-y classes
      classArray.push(addInsetYClass(scale.name, scale.value))
      classArray.push(addInsetYClass(scale.name, scale.value, negativeClassPrefix, negativeValuePrefix))

      // Add top classes
      classArray.push(addTopClass(scale.name, scale.value))
      classArray.push(addTopClass(scale.name, scale.value, negativeClassPrefix, negativeValuePrefix))

      // Add right classes
      classArray.push(addRightClass(scale.name, scale.value))
      classArray.push(addRightClass(scale.name, scale.value, negativeClassPrefix, negativeValuePrefix))

      // Add bottom classes
      classArray.push(addBottomClass(scale.name, scale.value))
      classArray.push(addBottomClass(scale.name, scale.value, negativeClassPrefix, negativeValuePrefix))

      // Add left classes
      classArray.push(addLeftClass(scale.name, scale.value))
      classArray.push(addLeftClass(scale.name, scale.value, negativeClassPrefix, negativeValuePrefix))
    })

    return classArray
  }

  topRightBottomLeft = [...topRightBottomLeft, ...addTopRightBottomLeftClasses(config.scales.DEFAULT_SPACING_SCALE, false)]
  topRightBottomLeft = [...topRightBottomLeft, ...addTopRightBottomLeftClasses(config.scales.CORE_DEFAULT_FRACTIONAL_SCALE, true)]

  /*        VISIBILITY CLASSES        */

  let visibility = [
    {
      label:         'visible',
      detail:        'visibility: visible;',
      documentation: 'Make an element visible. This is mostly useful for undoing the invisible utility at different screen sizes.'
    },
    {
      label:         'invisible',
      detail:        'visibility: hidden;',
      documentation: 'Hide an element, but still maintain its place in the DOM, affecting the layout of other elements.'
    }
  ]

  /*        Z-INDEX CLASSES        */

  const STACK_SCALE = ['0', '10', '20', '30', '40', '50']

  let zIndex = []

  for(let i = 0; i < STACK_SCALE.length; i++) {
    zIndex.push(
      {
        label:         `z-${STACK_SCALE[i]}`,
        detail:        `z-index: ${STACK_SCALE[i]};`,
        documentation: `Set an element's stack order to ${STACK_SCALE[i]}.`
      }
    )
  }

  zIndex.push(
    {
      label:         'z-auto',
      detail:        'z-index: auto;',
      documentation: 'Set an element\'s stack order to that of its parent.'
    }
  )

  return {
    layout: {
      container:          container,
      boxDecorationBreak: boxDecorationBreak,
      boxSizing:          boxSizing,
      display:            display,
      floats:             floats,
      clear:              clear,
      isolation:          isolation,
      objectFit:          objectFit,
      objectPosition:     objectPosition,
      overflow:           overflow,
      overscollBehavior:  overscollBehavior,
      position:           position,
      topRightBottomLeft: topRightBottomLeft,
      visibility:         visibility,
      zIndex:             zIndex
    }
  }
}
