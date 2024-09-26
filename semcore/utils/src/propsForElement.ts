import { ElementType } from 'react';

const allowedAttributes = new Set([
  'children',
  'dangerouslySetInnerHTML',
  'key',
  'ref',
  'autoFocus',
  'defaultValue',
  'valueLink',
  'defaultChecked',
  'checkedLink',
  'innerHTML',
  'suppressContentEditableWarning',
  'onFocusIn',
  'onFocusOut',
  'className',
  'onCopy',
  'onCut',
  'onPaste',
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
  'onKeyDown',
  'onKeyPress',
  'onKeyUp',
  'onFocus',
  'onBlur',
  'onChange',
  'onInput',
  'onInvalid',
  'onSubmit',
  'onReset',
  'onClick',
  'onContextMenu',
  'onDoubleClick',
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onSelect',
  'onTouchCancel',
  'onTouchEnd',
  'onTouchMove',
  'onTouchStart',
  'onScroll',
  'onWheel',
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
  'onLoad',
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
  'onTransitionEnd',
  'onCopyCapture',
  'onCutCapture',
  'onPasteCapture',
  'onCompositionEndCapture',
  'onCompositionStartCapture',
  'onCompositionUpdateCapture',
  'onKeyDownCapture',
  'onKeyPressCapture',
  'onKeyUpCapture',
  'onFocusCapture',
  'onBlurCapture',
  'onChangeCapture',
  'onInputCapture',
  'onSubmitCapture',
  'onResetCapture',
  'onClickCapture',
  'onContextMenuCapture',
  'onDoubleClickCapture',
  'onDragCapture',
  'onDragEndCapture',
  'onDragEnterCapture',
  'onDragExitCapture',
  'onDragLeaveCapture',
  'onDragOverCapture',
  'onDragStartCapture',
  'onDropCapture',
  'onMouseDownCapture',
  'onMouseEnterCapture',
  'onMouseLeaveCapture',
  'onMouseMoveCapture',
  'onMouseOutCapture',
  'onMouseOverCapture',
  'onMouseUpCapture',
  'onSelectCapture',
  'onTouchCancelCapture',
  'onTouchEndCapture',
  'onTouchMoveCapture',
  'onTouchStartCapture',
  'onScrollCapture',
  'onWheelCapture',
  'onAbortCapture',
  'onCanPlayCapture',
  'onCanPlayThroughCapture',
  'onDurationChangeCapture',
  'onEmptiedCapture',
  'onEncryptedCapture',
  'onEndedCapture',
  'onErrorCapture',
  'onLoadedDataCapture',
  'onLoadedMetadataCapture',
  'onLoadStartCapture',
  'onPauseCapture',
  'onPlayCapture',
  'onPlayingCapture',
  'onProgressCapture',
  'onRateChangeCapture',
  'onSeekedCapture',
  'onSeekingCapture',
  'onStalledCapture',
  'onSuspendCapture',
  'onTimeUpdateCapture',
  'onVolumeChangeCapture',
  'onWaitingCapture',
  'onLoadCapture',
  'onAnimationStartCapture',
  'onAnimationEndCapture',
  'onAnimationIterationCapture',
  'onTransitionEndCapture',
  'accept',
  'acceptCharset',
  'accessKey',
  'action',
  'allowFullScreen',
  'allowTransparency',
  'alt',
  'as',
  'async',
  'autoComplete',
  'autoPlay',
  'capture',
  'cellPadding',
  'cellSpacing',
  'charSet',
  'challenge',
  'checked',
  'cite',
  'classID',
  'className',
  'cols',
  'colSpan',
  'content',
  'contentEditable',
  'contextMenu',
  'controlsList',
  'controls',
  'coords',
  'crossOrigin',
  'data',
  'dateTime',
  'default',
  'defer',
  'dir',
  'disabled',
  'download',
  'draggable',
  'encType',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'frameBorder',
  'headers',
  'height',
  'hidden',
  'high',
  'href',
  'hrefLang',
  'htmlFor',
  'httpEquiv',
  'icon',
  'id',
  'inputMode',
  'integrity',
  'is',
  'keyParams',
  'keyType',
  'kind',
  'label',
  'lang',
  'list',
  'loop',
  'low',
  'manifest',
  'marginHeight',
  'marginWidth',
  'max',
  'maxLength',
  'media',
  'mediaGroup',
  'method',
  'min',
  'minLength',
  'multiple',
  'muted',
  'name',
  'nonce',
  'noValidate',
  'open',
  'optimum',
  'pattern',
  'placeholder',
  'playsInline',
  'poster',
  'preload',
  'profile',
  'radioGroup',
  'readOnly',
  'referrerPolicy',
  'rel',
  'required',
  'reversed',
  'role',
  'rows',
  'rowSpan',
  'sandbox',
  'scope',
  'scoped',
  'scrolling',
  'seamless',
  'selected',
  'shape',
  'size',
  'sizes',
  'span',
  'spellCheck',
  'src',
  'srcDoc',
  'srcLang',
  'srcSet',
  'start',
  'step',
  'style',
  'summary',
  'tabIndex',
  'target',
  'title',
  'type',
  'useMap',
  'value',
  'width',
  'wmode',
  'wrap',
  'about',
  'datatype',
  'inlist',
  'prefix',
  'property',
  'resource',
  'typeof',
  'vocab',
  'autoCapitalize',
  'autoCorrect',
  'autoSave',
  'color',
  'itemProp',
  'itemScope',
  'itemType',
  'itemID',
  'itemRef',
  'results',
  'security',
  'unselectable',
  'accentHeight',
  'accumulate',
  'additive',
  'alignmentBaseline',
  'allowReorder',
  'alphabetic',
  'amplitude',
  'arabicForm',
  'ascent',
  'attributeName',
  'attributeType',
  'autoReverse',
  'azimuth',
  'baseFrequency',
  'baseProfile',
  'baselineShift',
  'bbox',
  'begin',
  'bias',
  'by',
  'calcMode',
  'capHeight',
  'clip',
  'clipPath',
  'clipRule',
  'clipPathUnits',
  'colorInterpolation',
  'colorInterpolationFilters',
  'colorProfile',
  'colorRendering',
  'contentScriptType',
  'contentStyleType',
  'cursor',
  'cx',
  'cy',
  'd',
  'decelerate',
  'descent',
  'diffuseConstant',
  'direction',
  'display',
  'divisor',
  'dominantBaseline',
  'dur',
  'dx',
  'dy',
  'edgeMode',
  'elevation',
  'enableBackground',
  'end',
  'exponent',
  'externalResourcesRequired',
  'fill',
  'fillOpacity',
  'fillRule',
  'filter',
  'filterRes',
  'filterUnits',
  'floodColor',
  'floodOpacity',
  'focusable',
  'fontFamily',
  'fontSize',
  'fontSizeAdjust',
  'fontStretch',
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'format',
  'from',
  'fx',
  'fy',
  'g1',
  'g2',
  'glyphName',
  'glyphOrientationHorizontal',
  'glyphOrientationVertical',
  'glyphRef',
  'gradientTransform',
  'gradientUnits',
  'hanging',
  'horizAdvX',
  'horizOriginX',
  'ideographic',
  'imageRendering',
  'in',
  'in2',
  'intercept',
  'k',
  'k1',
  'k2',
  'k3',
  'k4',
  'kernelMatrix',
  'kernelUnitLength',
  'kerning',
  'keyPoints',
  'keySplines',
  'keyTimes',
  'lengthAdjust',
  'letterSpacing',
  'lightingColor',
  'limitingConeAngle',
  'local',
  'markerEnd',
  'markerMid',
  'markerStart',
  'markerHeight',
  'markerUnits',
  'markerWidth',
  'mask',
  'maskContentUnits',
  'maskUnits',
  'mathematical',
  'mode',
  'numOctaves',
  'offset',
  'opacity',
  'operator',
  'order',
  'orient',
  'orientation',
  'origin',
  'overflow',
  'overlinePosition',
  'overlineThickness',
  'paintOrder',
  'panose1',
  'pathLength',
  'patternContentUnits',
  'patternTransform',
  'patternUnits',
  'pointerEvents',
  'points',
  'pointsAtX',
  'pointsAtY',
  'pointsAtZ',
  'preserveAlpha',
  'preserveAspectRatio',
  'primitiveUnits',
  'r',
  'radius',
  'refX',
  'refY',
  'renderingIntent',
  'repeatCount',
  'repeatDur',
  'requiredExtensions',
  'requiredFeatures',
  'restart',
  'result',
  'rotate',
  'rx',
  'ry',
  'scale',
  'seed',
  'shapeRendering',
  'slope',
  'spacing',
  'specularConstant',
  'specularExponent',
  'speed',
  'spreadMethod',
  'startOffset',
  'stdDeviation',
  'stemh',
  'stemv',
  'stitchTiles',
  'stopColor',
  'stopOpacity',
  'strikethroughPosition',
  'strikethroughThickness',
  'string',
  'stroke',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeLinecap',
  'strokeLinejoin',
  'strokeMiterlimit',
  'strokeOpacity',
  'strokeWidth',
  'surfaceScale',
  'systemLanguage',
  'tableValues',
  'targetX',
  'targetY',
  'textAnchor',
  'textDecoration',
  'textRendering',
  'textLength',
  'to',
  'transform',
  'u1',
  'u2',
  'underlinePosition',
  'underlineThickness',
  'unicode',
  'unicodeBidi',
  'unicodeRange',
  'unitsPerEm',
  'vAlphabetic',
  'vHanging',
  'vIdeographic',
  'vMathematical',
  'values',
  'vectorEffect',
  'version',
  'vertAdvY',
  'vertOriginX',
  'vertOriginY',
  'viewBox',
  'viewTarget',
  'visibility',
  'widths',
  'wordSpacing',
  'writingMode',
  'x',
  'xHeight',
  'x1',
  'x2',
  'xChannelSelector',
  'xlinkActuate',
  'xlinkArcrole',
  'xlinkHref',
  'xlinkRole',
  'xlinkShow',
  'xlinkTitle',
  'xlinkType',
  'xmlBase',
  'xmlns',
  'xmlnsXlink',
  'xmlLang',
  'xmlSpace',
  'y',
  'y1',
  'y2',
  'yChannelSelector',
  'z',
  'zoomAndPan',
  'onPointerDown',
  'onPointerMove',
  'onPointerUp',
  'onPointerCancel',
  'onGotPointerCapture',
  'onLostPointerCapture',
  'onPointerEnter',
  'onPointerLeave',
  'onPointerOver',
  'onPointerOut',
  'className',
  'htmlFor',
  'autofocus',
  'elementtiming',
  'attr',
  'inert',
  'suppressHydrationWarning',
]);

export const validAttr = (name: string) => {
  if (name.startsWith('x-')) return true;
  if (name.startsWith('data-')) return true;
  if (name.startsWith('aria-')) return true;

  return allowedAttributes.has(name);
};

const omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
  // because Children default value [Object object]
  textarea: true,
};

export default function propsForElement<T extends {}>(
  props: T,
  element?: ElementType | string,
): Partial<T> {
  if (element && typeof element !== 'string') {
    return props;
  } else {
    // @ts-ignore
    const { __excludeProps = [], ...other } = props as any;
    const validProps = Object.keys(other).reduce((acc: any, propName) => {
      if (!__excludeProps.includes(propName) && validAttr(propName)) {
        acc[propName] = other[propName];
      }
      return acc;
    }, {});
    if (element && (omittedCloseTags as any)[element as any]) {
      validProps['children'] = undefined;
    }
    return validProps;
  }
}
