const data = {
	"fof": "@font-face {$[]}",
	"i": "@import url($[]);",
	"k": "@keyframes $[name] {$[]}",
	// @media
	"md": "@media $[query] {$[]}",
	"mdn": "@media (min-width: $[query]) {$[]}",
	"mdnh": "@media (min-height: $[query]) {$[]}",
	"mdx": "@media (max-width: $[query]) {$[]}",
	"mdxh": "@media (max-height: $[query]) {$[]}",
	"mda": "@media (min-width: $[query]) and (max-width: $[query2]) {$[]}",
	"mdah": "@media (min-height: $[query]) and (max-height: $[query2]) {$[]}",
	"mdp": "@media print {$[]}",
	//
	"ac": "align-content: $[];",
	// align-items
	"ai": "align-items: $[]",
	"aic": "align-items: center;",
	"ais": "align-items: stretch;",
	"aifs": "align-items: flex-start;",
	"aife": "align-items: flex-end;",
	"aib": "align-items: baseline;",
	// animation
	"an": "animation: $[name] $[duration] $[timing];",
	"ann": "animation-name: $[];",
	"andu": "animation-duration: $[];",
	"ant": "animation-timing-function: $[];",
	"ande": "animation-delay: $[];",
	"ani": "animation-iteration-count: $[];",
	"andi": "animation-direction: $[];",
	"andf": "animation-fill-mode: $[];",
	"andp": "animation-play-state: $[];",
	//
	"apn": "appearance: none;",
	"as": "align-self: $[];",
	"b": "bottom: $[];",
	// border
	"bd": "border: $[1px] $[solid] $[#000];",
	"bdw": "border-width: $[];",
	"bds": "border-style: $[];",
	"bdc": "border-color: $[];",
	"bdr": "border-radius: $[];",
	"bdcl": "border-collapse: collapse;",
	"bdt": "border-top: $[1px] $[solid] $[#000];",
	"bdtc": "border-top-color: $[];",
	"bdts": "border-top-style: $[];",
	"bdtw": "border-top-width: $[];",
	"bdtlr": "border-top-left-radius: $[];",
	"bdtrr": "border-top-right-radius: $[];",
	"bdr": "border-right: $[1px] $[solid] $[#000];",
	"bdrc": "border-right-color: $[];",
	"bdrs": "border-right-style: $[];",
	"bdrw": "border-right-width: $[];",
	"bdrtr": "border-right-top-radius: $[];",
	"bdrbr": "border-right-bottom-radius: $[];",
	"bdb": "border-bottom: $[1px] $[solid] $[#000];",
	"bdbc": "border-bottom-color: $[];",
	"bdbs": "border-bottom-style: $[];",
	"bdbw": "border-bottom-width: $[];",
	"bdblr": "border-bottom-left-radius: $[];",
	"bdbrr": "border-bottom-right-radius: $[];",
	"bdl": "border-left: $[1px] $[solid] $[#000];",
	"bdlc": "border-left-color: $[];",
	"bdls": "border-left-style: $[];",
	"bdlw": "border-left-width: $[];",
	"bdltr": "border-left-top-radius: $[];",
	"bdlbr": "border-left-bottom-radius: $[];",
	//
	"bv": "backface-visibility: hidden;",
	// background
	"bg": "background: $[];",
	"bga": "background-attachment: fixed;",
	"bgc": "background-color: $[];",
	"bgcl": "background-clip: $[];",
	"bgi": "background-image: url($[]);",
	"bgo": "background-origin: $[];",
	"bgp": "background-position: $[1] $[2];",
	"bgpx": "background-position-x: $[];",
	"bgpy": "background-position-y: $[];",
	"bgr": "background-repeat: $[];",
	"bgs": "background-size: cover;",
	"bgg": "background-image: linear-gradient($[]);",
	//
	"bxsh": "box-shadow: $[];",
	"bxsz": "box-sizing: $[];",
	"c": "color: $[];",
	"cl": "clear: $[];",
	"con": "content: $[];",
	"ci": "counter-increment: $[];",
	// column
	"col": "columns: $[];",
	"colc": "column-count: $[];",
	"colf": "column-fill: $[];",
	"colg": "column-gap: $[];",
	"colr": "column-rule: $[];",
	"colrc": "column-rule-color: $[];",
	"colrs": "column-rule-style: $[];",
	"colrw": "column-rule-width: $[];",
	"cols": "column-span: $[];",
	"colw": "column-width: $[];",
	//
	"cr": "counter-reset: $[];",
	"cp": "clip: $[];",
	"cps": "caption-side: $[];",
	// cursor
	"cur": "cursor: $[];",
	"cura": "cursor: auto;",
	"curp": "cursor: pointer;",
	// display
	"d": "display: $[];",
	"di": "diplay: inline;",
	"db": "diplay: block;",
	"dc": "diplay: contents;",
	"df": "display: flex;",
	"dg": "display: grid;",
	"dib": "diplay: inline-block;",
	"dif": "display: inline-flex;",
	"dig": "display: inline-grid;",
	"dit": "display: inline-table;",
	"dt": "display: table;",
	"dtce": "display: table-cell;",
	"dtco": "display: table-column;",
	"dtr": "display: table-row;",
	"dn": "diplay: none;",
	//
	"ec": "empty-cells: $[];",
	// font
	"f": "font: $[size] $[family];",
	"fd": "font-display: $[];",
	"ff": "font-family: $[];",
	"fst": "font-style: $[];",
	"fsm": "font-smoothing: antialiased;",
	"fstr": "font-stretch: $[];",
	"fv": "font-variant: $[];",
	"fvs": "font-variation-settings: $[];",
	"fw": "font-weight: $[];",
	"fs": "font-size: $[];",
	"fsa": "font-size-adjust: $[];",
	//
	"flt": "float: $[];",
	// flex
	"fl": "flex: $[];",
	"flb": "flex-basis: $[];",
	"fld": "flex-direction: $[];",
	"flf": "flex-flow: $[];",
	"flg": "flex-grow: $[];",
	"fls": "flex-shrink: $[];",
	"flw": "flex-wrap: $[];",
	// grid
	"g": "grid: $[];",
	"gtc": "grid-template-columns: $[];",
	"gtr": "grid-template-rows: $[];",
	"gta": "grid-template-areas: $[];",
	"gt": "grid-template: $[];",
	"gg": "grid-gap: $[];",
	"gcg": "grid-column-gap: $[];",
	"grg": "grid-row-gap: $[];",
	"gac": "grid-auto-columns: $[];",
	"gar": "grid-auto-rows: $[];",
	"gaf": "grid-auto-flow: $[];",
	"gc": "grid-column: $[];",
	"gcs": "grid-column-start: $[];",
	"gce": "grid-column-end: $[];",
	"gr": "grid-row: $[];",
	"grs": "grid-row-start: $[];",
	"gre": "grid-row-end: $[];",
	"ga": "grid-area: $[];",
	//
	"h": "height: $[];",
	"jc": "justify-content: $[];",
	"ji": "justify-items: $[];",
	"js": "justify-self: $[];",
	"l": "left: $[];",
	"lh": "line-height: $[];",
	"lis": "list-style: $[];",
	"lisi": "list-style-image: $[];",
	"lisp": "list-style-position: $[];",
	"list": "list-style-type: $[];",
	"ls": "letter-spacing: $[];",
	// margin
	"m": "margin: $[];",
	"mt": "margin-top: $[];",
	"mr": "margin-right: $[];",
	"mb": "margin-bottom: $[];",
	"ml": "margin-left: $[];",
	//
	"mah": "max-height: $[];",
	"mar": "max-resolution: $[];",
	"maw": "max-width: $[];",
	"mih": "min-height: $[];",
	"mir": "min-resolution: $[];",
	"miw": "min-width: $[];",
	"ol": "outline: $[];",
	"olc": "outline-color: $[];",
	"olo": "outline-offset: $[];",
	"ols": "outline-style: $[];",
	"olw": "outline-width: $[];",
	"op": "opacity: $[];",
	"ord": "order: $[];",
	"ori": "orientation: $[];",
	"orp": "orphans: $[];",
	// overflow
	"ov": "overflow: $[];",
	"ovs": "overflow-style: $[];",
	"ovx": "overflow-x: $[];",
	"ovy": "overflow-y: $[];",
	// padding
	"p": "padding: $[];",
	"pt": "padding-top: $[];",
	"pr": "padding-right: $[];",
	"pb": "padding-bottom: $[];",
	"pl": "padding-left: $[];",
	// 
	"pgba": "page-break-after: $[];",
	"pgbb": "page-break-before: $[];",
	"pgbi": "page-break-inside: $[];",
	// position
	"ps": "position: $[];",
	"psr": "position: relative;",
	"psa": "position: absolute;",
	"psf": "position: fixed;",
	"pss": "position: sticky;",
	//
	"q": "quotes: $[];",
	"r": "right: $[];",
	"rsz": "resize: $[];",
	"t": "top: $[];",
	"tbl": "table-layout: fixed;",
	// text	
	"ta": "text-align: $[];",
	"tal": "text-align-last: $[];",
	"td": "text-decoration: $[];",
	"te": "text-emphasis: $[];",
	"th": "text-height: $[];",
	"ti": "text-indent: $[];",
	"tj": "text-justify: $[];",
	"to": "text-outline: $[];",
	"toe": "text-overflow: ellipsis;",
	"toc": "text-overflow: clip;",
	"tr": "text-replace: $[];",
	"tsh": "text-shadow: $[];",
	"tt": "text-transform: $[];",
	"tw": "text-wrap: $[];",
	// transform
	"tf": "transform: $[];",
	"tft": "transform: translate($[]);",
	"tftx": "transform: translateX($[]);",
	"tfty": "transform: translateY($[]);",
	"tftz": "transform: translateZ($[]);",
	"tft3": "transform: translate3d($[1], $[2], $[3]);"	,
	"tfo": "transform-origin: $[];",
	"tfsc": "transform: scale($[]);",
	"tfscx": "transform: scaleX($[]);",
	"tfscy": "transform: scaleY($[]);",
	"tfscz": "transform: scaleZ($[]);",
	"tfsc3": "transform: scale3d($[1], $[2], $[3]);",
	// transition
	"ts": "transition: $[property] $[duration] $[timing];",
	"tsp": "transition-property: $[];",
	"tsdu": "transition-duration: $[];",
	"tst": "transition-timing-function: $[];",
	"tsde": "transition-delay: $[];",
	// 
	"us": "user-select: none;",
	// visibility
	"v": "visibility: $[];",
	"vv": "visibility: visible;",
	"vh": "visibility: hidden;",
	//
	"va": "vertical-align: $[];",
	"w": "width: $[];",
	// white-space
	"ws": "white-space: $[];",
	"wsn": "white-space: normal;",
	"wsnw": "white-space: nowrap;",
	"wsbs": "white-space: break-spaces;",
	"wsc": "white-space-collapse: $[];",
	//
	"wid": "widows: $[];",
	"wm": "writing-mode: $[];",
	"wob": "word-break: $[];",
	"wos": "word-spacing: $[];",
	"wow": "word-wrap: $[];",
	"z": "z-index: $[];",
	"zom": "zoom: 1;"
}

module.exports = data