(function ($) {
	$("#wpcontent").append('<div id="isotope-container">' +
	'<div id="isotope-option"><input type="text" name="search" id="search" value="" placeholder="Start typing..." autocomplete="off">' +
	'<a href="#" id="showAll">Show all</a><a href="#" id="isotope-close">X</a></div>' +
	'<p id="noMatches" style="display: none;">No matches found</p>' +
	'<div id="isotope-icon-container">' +
	'<div id="isotope-sortable">' +
	'<div id="ginger-fa-rub" class="ginger-icon-div"><i class="fa fa-rub"></i>rub</div>' +
	'<div id="ginger-fa-ruble" class="ginger-icon-div"><i class="fa fa-ruble"></i>ruble</div>' +
	'<div id="ginger-fa-rouble" class="ginger-icon-div"><i class="fa fa-rouble"></i>rouble</div>' +
	'<div id="ginger-fa-pagelines" class="ginger-icon-div"><i class="fa fa-pagelines"></i>pagelines</div>' +
	'<div id="ginger-fa-stack-exchange" class="ginger-icon-div"><i class="fa fa-stack-exchange"></i>stack-exchange</div>' +
	'<div id="ginger-fa-arrow-circle-o-right" class="ginger-icon-div"><i class="fa fa-arrow-circle-o-right"></i>arrow-circle-o-right</div>' +
	'<div id="ginger-fa-arrow-circle-o-left" class="ginger-icon-div"><i class="fa fa-arrow-circle-o-left"></i>arrow-circle-o-left</div>' +
	'<div id="ginger-fa-caret-square-o-left" class="ginger-icon-div"><i class="fa fa-caret-square-o-left"></i>caret-square-o-left</div>' +
	'<div id="ginger-fa-toggle-left" class="ginger-icon-div"><i class="fa fa-toggle-left"></i>toggle-left</div>' +
	'<div id="ginger-fa-dot-circle-o" class="ginger-icon-div"><i class="fa fa-dot-circle-o"></i>dot-circle-o</div>' +
	'<div id="ginger-fa-wheelchair" class="ginger-icon-div"><i class="fa fa-wheelchair"></i>wheelchair</div>' +
	'<div id="ginger-fa-vimeo-square" class="ginger-icon-div"><i class="fa fa-vimeo-square"></i>vimeo-square</div>' +
	'<div id="ginger-fa-try" class="ginger-icon-div"><i class="fa fa-try"></i>try</div>' +
	'<div id="ginger-fa-turkish-lira" class="ginger-icon-div"><i class="fa fa-turkish-lira"></i>turkish-lira</div>' +
	'<div id="ginger-fa-plus-square-o" class="ginger-icon-div"><i class="fa fa-plus-square-o"></i>plus-square-o</div>' +
	'<div id="ginger-fa-adjust" class="ginger-icon-div"><i class="fa fa-adjust"></i>adjust</div>' +
	'<div id="ginger-fa-anchor" class="ginger-icon-div"><i class="fa fa-anchor"></i>anchor</div>' +
	'<div id="ginger-fa-archive" class="ginger-icon-div"><i class="fa fa-archive"></i>archive</div>' +
	'<div id="ginger-fa-arrows" class="ginger-icon-div"><i class="fa fa-arrows"></i>arrows</div>' +
	'<div id="ginger-fa-arrows-h" class="ginger-icon-div"><i class="fa fa-arrows-h"></i>arrows-h</div>' +
	'<div id="ginger-fa-arrows-v" class="ginger-icon-div"><i class="fa fa-arrows-v"></i>arrows-v</div>' +
	'<div id="ginger-fa-asterisk" class="ginger-icon-div"><i class="fa fa-asterisk"></i>asterisk</div>' +
	'<div id="ginger-fa-ban" class="ginger-icon-div"><i class="fa fa-ban"></i>ban</div>' +
	'<div id="ginger-fa-bar-chart-o" class="ginger-icon-div"><i class="fa fa-bar-chart-o"></i>bar-chart-o</div>' +
	'<div id="ginger-fa-barcode" class="ginger-icon-div"><i class="fa fa-barcode"></i>barcode</div>' +
	'<div id="ginger-fa-bars" class="ginger-icon-div"><i class="fa fa-bars"></i>bars</div>' +
	'<div id="ginger-fa-beer" class="ginger-icon-div"><i class="fa fa-beer"></i>beer</div>' +
	'<div id="ginger-fa-bell" class="ginger-icon-div"><i class="fa fa-bell"></i>bell</div>' +
	'<div id="ginger-fa-bell-o" class="ginger-icon-div"><i class="fa fa-bell-o"></i>bell-o</div>' +
	'<div id="ginger-fa-bolt" class="ginger-icon-div"><i class="fa fa-bolt"></i>bolt</div>' +
	'<div id="ginger-fa-book" class="ginger-icon-div"><i class="fa fa-book"></i>book</div>' +
	'<div id="ginger-fa-bookmark" class="ginger-icon-div"><i class="fa fa-bookmark"></i>bookmark</div>' +
	'<div id="ginger-fa-bookmark-o" class="ginger-icon-div"><i class="fa fa-bookmark-o"></i>bookmark-o</div>' +
	'<div id="ginger-fa-briefcase" class="ginger-icon-div"><i class="fa fa-briefcase"></i>briefcase</div>' +
	'<div id="ginger-fa-bug" class="ginger-icon-div"><i class="fa fa-bug"></i>bug</div>' +
	'<div id="ginger-fa-building-o" class="ginger-icon-div"><i class="fa fa-building-o"></i>building-o</div>' +
	'<div id="ginger-fa-bullhorn" class="ginger-icon-div"><i class="fa fa-bullhorn"></i>bullhorn</div>' +
	'<div id="ginger-fa-bullseye" class="ginger-icon-div"><i class="fa fa-bullseye"></i>bullseye</div>' +
	'<div id="ginger-fa-calendar" class="ginger-icon-div"><i class="fa fa-calendar"></i>calendar</div>' +
	'<div id="ginger-fa-calendar-o" class="ginger-icon-div"><i class="fa fa-calendar-o"></i>calendar-o</div>' +
	'<div id="ginger-fa-camera" class="ginger-icon-div"><i class="fa fa-camera"></i>camera</div>' +
	'<div id="ginger-fa-camera-retro" class="ginger-icon-div"><i class="fa fa-camera-retro"></i>camera-retro</div>' +
	'<div id="ginger-fa-caret-square-o-down" class="ginger-icon-div"><i class="fa fa-caret-square-o-down"></i>caret-square-o-down</div>' +
	'<div id="ginger-fa-caret-square-o-left" class="ginger-icon-div"><i class="fa fa-caret-square-o-left"></i>caret-square-o-left</div>' +
	'<div id="ginger-fa-caret-square-o-right" class="ginger-icon-div"><i class="fa fa-caret-square-o-right"></i>caret-square-o-right</div>' +
	'<div id="ginger-fa-caret-square-o-up" class="ginger-icon-div"><i class="fa fa-caret-square-o-up"></i>caret-square-o-up</div>' +
	'<div id="ginger-fa-certificate" class="ginger-icon-div"><i class="fa fa-certificate"></i>certificate</div>' +
	'<div id="ginger-fa-check" class="ginger-icon-div"><i class="fa fa-check"></i>check</div>' +
	'<div id="ginger-fa-check-circle" class="ginger-icon-div"><i class="fa fa-check-circle"></i>check-circle</div>' +
	'<div id="ginger-fa-check-circle-o" class="ginger-icon-div"><i class="fa fa-check-circle-o"></i>check-circle-o</div>' +
	'<div id="ginger-fa-check-square" class="ginger-icon-div"><i class="fa fa-check-square"></i>check-square</div>' +
	'<div id="ginger-fa-check-square-o" class="ginger-icon-div"><i class="fa fa-check-square-o"></i>check-square-o</div>' +
	'<div id="ginger-fa-circle" class="ginger-icon-div"><i class="fa fa-circle"></i>circle</div>' +
	'<div id="ginger-fa-circle-o" class="ginger-icon-div"><i class="fa fa-circle-o"></i>circle-o</div>' +
	'<div id="ginger-fa-clock-o" class="ginger-icon-div"><i class="fa fa-clock-o"></i>clock-o</div>' +
	'<div id="ginger-fa-cloud" class="ginger-icon-div"><i class="fa fa-cloud"></i>cloud</div>' +
	'<div id="ginger-fa-cloud-download" class="ginger-icon-div"><i class="fa fa-cloud-download"></i>cloud-download</div>' +
	'<div id="ginger-fa-cloud-upload" class="ginger-icon-div"><i class="fa fa-cloud-upload"></i>cloud-upload</div>' +
	'<div id="ginger-fa-code" class="ginger-icon-div"><i class="fa fa-code"></i>code</div>' +
	'<div id="ginger-fa-code-fork" class="ginger-icon-div"><i class="fa fa-code-fork"></i>code-fork</div>' +
	'<div id="ginger-fa-coffee" class="ginger-icon-div"><i class="fa fa-coffee"></i>coffee</div>' +
	'<div id="ginger-fa-cog" class="ginger-icon-div"><i class="fa fa-cog"></i>cog</div>' +
	'<div id="ginger-fa-cogs" class="ginger-icon-div"><i class="fa fa-cogs"></i>cogs</div>' +
	'<div id="ginger-fa-comment" class="ginger-icon-div"><i class="fa fa-comment"></i>comment</div>' +
	'<div id="ginger-fa-comment-o" class="ginger-icon-div"><i class="fa fa-comment-o"></i>comment-o</div>' +
	'<div id="ginger-fa-comments" class="ginger-icon-div"><i class="fa fa-comments"></i>comments</div>' +
	'<div id="ginger-fa-comments-o" class="ginger-icon-div"><i class="fa fa-comments-o"></i>comments-o</div>' +
	'<div id="ginger-fa-compass" class="ginger-icon-div"><i class="fa fa-compass"></i>compass</div>' +
	'<div id="ginger-fa-credit-card" class="ginger-icon-div"><i class="fa fa-credit-card"></i>credit-card</div>' +
	'<div id="ginger-fa-crop" class="ginger-icon-div"><i class="fa fa-crop"></i>crop</div>' +
	'<div id="ginger-fa-crosshairs" class="ginger-icon-div"><i class="fa fa-crosshairs"></i>crosshairs</div>' +
	'<div id="ginger-fa-cutlery" class="ginger-icon-div"><i class="fa fa-cutlery"></i>cutlery</div>' +
	'<div id="ginger-fa-dashboard" class="ginger-icon-div"><i class="fa fa-dashboard"></i>dashboard</div>' +
	'<div id="ginger-fa-desktop" class="ginger-icon-div"><i class="fa fa-desktop"></i>desktop</div>' +
	'<div id="ginger-fa-dot-circle-o" class="ginger-icon-div"><i class="fa fa-dot-circle-o"></i>dot-circle-o</div>' +
	'<div id="ginger-fa-download" class="ginger-icon-div"><i class="fa fa-download"></i>download</div>' +
	'<div id="ginger-fa-edit" class="ginger-icon-div"><i class="fa fa-edit"></i>edit</div>' +
	'<div id="ginger-fa-ellipsis-h" class="ginger-icon-div"><i class="fa fa-ellipsis-h"></i>ellipsis-h</div>' +
	'<div id="ginger-fa-ellipsis-v" class="ginger-icon-div"><i class="fa fa-ellipsis-v"></i>ellipsis-v</div>' +
	'<div id="ginger-fa-envelope" class="ginger-icon-div"><i class="fa fa-envelope"></i>envelope</div>' +
	'<div id="ginger-fa-envelope-o" class="ginger-icon-div"><i class="fa fa-envelope-o"></i>envelope-o</div>' +
	'<div id="ginger-fa-eraser" class="ginger-icon-div"><i class="fa fa-eraser"></i>eraser</div>' +
	'<div id="ginger-fa-exchange" class="ginger-icon-div"><i class="fa fa-exchange"></i>exchange</div>' +
	'<div id="ginger-fa-exclamation" class="ginger-icon-div"><i class="fa fa-exclamation"></i>exclamation</div>' +
	'<div id="ginger-fa-exclamation-circle" class="ginger-icon-div"><i class="fa fa-exclamation-circle"></i>exclamation-circle</div>' +
	'<div id="ginger-fa-exclamation-triangle" class="ginger-icon-div"><i class="fa fa-exclamation-triangle"></i>exclamation-triangle</div>' +
	'<div id="ginger-fa-external-link" class="ginger-icon-div"><i class="fa fa-external-link"></i>external-link</div>' +
	'<div id="ginger-fa-external-link-square" class="ginger-icon-div"><i class="fa fa-external-link-square"></i>external-link-square</div>' +
	'<div id="ginger-fa-eye" class="ginger-icon-div"><i class="fa fa-eye"></i>eye</div>' +
	'<div id="ginger-fa-eye-slash" class="ginger-icon-div"><i class="fa fa-eye-slash"></i>eye-slash</div>' +
	'<div id="ginger-fa-female" class="ginger-icon-div"><i class="fa fa-female"></i>female</div>' +
	'<div id="ginger-fa-fighter-jet" class="ginger-icon-div"><i class="fa fa-fighter-jet"></i>fighter-jet</div>' +
	'<div id="ginger-fa-film" class="ginger-icon-div"><i class="fa fa-film"></i>film</div>' +
	'<div id="ginger-fa-filter" class="ginger-icon-div"><i class="fa fa-filter"></i>filter</div>' +
	'<div id="ginger-fa-fire" class="ginger-icon-div"><i class="fa fa-fire"></i>fire</div>' +
	'<div id="ginger-fa-fire-extinguisher" class="ginger-icon-div"><i class="fa fa-fire-extinguisher"></i>fire-extinguisher</div>' +
	'<div id="ginger-fa-flag" class="ginger-icon-div"><i class="fa fa-flag"></i>flag</div>' +
	'<div id="ginger-fa-flag-checkered" class="ginger-icon-div"><i class="fa fa-flag-checkered"></i>flag-checkered</div>' +
	'<div id="ginger-fa-flag-o" class="ginger-icon-div"><i class="fa fa-flag-o"></i>flag-o</div>' +
	'<div id="ginger-fa-flash" class="ginger-icon-div"><i class="fa fa-flash"></i>flash</div>' +
	'<div id="ginger-fa-flask" class="ginger-icon-div"><i class="fa fa-flask"></i>flask</div>' +
	'<div id="ginger-fa-folder" class="ginger-icon-div"><i class="fa fa-folder"></i>folder</div>' +
	'<div id="ginger-fa-folder-o" class="ginger-icon-div"><i class="fa fa-folder-o"></i>folder-o</div>' +
	'<div id="ginger-fa-folder-open" class="ginger-icon-div"><i class="fa fa-folder-open"></i>folder-open</div>' +
	'<div id="ginger-fa-folder-open-o" class="ginger-icon-div"><i class="fa fa-folder-open-o"></i>folder-open-o</div>' +
	'<div id="ginger-fa-frown-o" class="ginger-icon-div"><i class="fa fa-frown-o"></i>frown-o</div>' +
	'<div id="ginger-fa-gamepad" class="ginger-icon-div"><i class="fa fa-gamepad"></i>gamepad</div>' +
	'<div id="ginger-fa-gavel" class="ginger-icon-div"><i class="fa fa-gavel"></i>gavel</div>' +
	'<div id="ginger-fa-gear" class="ginger-icon-div"><i class="fa fa-gear"></i>gear</div>' +
	'<div id="ginger-fa-gears" class="ginger-icon-div"><i class="fa fa-gears"></i>gears</div>' +
	'<div id="ginger-fa-gift" class="ginger-icon-div"><i class="fa fa-gift"></i>gift</div>' +
	'<div id="ginger-fa-glass" class="ginger-icon-div"><i class="fa fa-glass"></i>glass</div>' +
	'<div id="ginger-fa-globe" class="ginger-icon-div"><i class="fa fa-globe"></i>globe</div>' +
	'<div id="ginger-fa-group" class="ginger-icon-div"><i class="fa fa-group"></i>group</div>' +
	'<div id="ginger-fa-hdd-o" class="ginger-icon-div"><i class="fa fa-hdd-o"></i>hdd-o</div>' +
	'<div id="ginger-fa-headphones" class="ginger-icon-div"><i class="fa fa-headphones"></i>headphones</div>' +
	'<div id="ginger-fa-heart" class="ginger-icon-div"><i class="fa fa-heart"></i>heart</div>' +
	'<div id="ginger-fa-heart-o" class="ginger-icon-div"><i class="fa fa-heart-o"></i>heart-o</div>' +
	'<div id="ginger-fa-home" class="ginger-icon-div"><i class="fa fa-home"></i>home</div>' +
	'<div id="ginger-fa-inbox" class="ginger-icon-div"><i class="fa fa-inbox"></i>inbox</div>' +
	'<div id="ginger-fa-info" class="ginger-icon-div"><i class="fa fa-info"></i>info</div>' +
	'<div id="ginger-fa-info-circle" class="ginger-icon-div"><i class="fa fa-info-circle"></i>info-circle</div>' +
	'<div id="ginger-fa-key" class="ginger-icon-div"><i class="fa fa-key"></i>key</div>' +
	'<div id="ginger-fa-keyboard-o" class="ginger-icon-div"><i class="fa fa-keyboard-o"></i>keyboard-o</div>' +
	'<div id="ginger-fa-laptop" class="ginger-icon-div"><i class="fa fa-laptop"></i>laptop</div>' +
	'<div id="ginger-fa-leaf" class="ginger-icon-div"><i class="fa fa-leaf"></i>leaf</div>' +
	'<div id="ginger-fa-legal" class="ginger-icon-div"><i class="fa fa-legal"></i>legal</div>' +
	'<div id="ginger-fa-lemon-o" class="ginger-icon-div"><i class="fa fa-lemon-o"></i>lemon-o</div>' +
	'<div id="ginger-fa-level-down" class="ginger-icon-div"><i class="fa fa-level-down"></i>level-down</div>' +
	'<div id="ginger-fa-level-up" class="ginger-icon-div"><i class="fa fa-level-up"></i>level-up</div>' +
	'<div id="ginger-fa-lightbulb-o" class="ginger-icon-div"><i class="fa fa-lightbulb-o"></i>lightbulb-o</div>' +
	'<div id="ginger-fa-location-arrow" class="ginger-icon-div"><i class="fa fa-location-arrow"></i>location-arrow</div>' +
	'<div id="ginger-fa-lock" class="ginger-icon-div"><i class="fa fa-lock"></i>lock</div>' +
	'<div id="ginger-fa-magic" class="ginger-icon-div"><i class="fa fa-magic"></i>magic</div>' +
	'<div id="ginger-fa-magnet" class="ginger-icon-div"><i class="fa fa-magnet"></i>magnet</div>' +
	'<div id="ginger-fa-mail-forward" class="ginger-icon-div"><i class="fa fa-mail-forward"></i>mail-forward</div>' +
	'<div id="ginger-fa-mail-reply" class="ginger-icon-div"><i class="fa fa-mail-reply"></i>mail-reply</div>' +
	'<div id="ginger-fa-mail-reply-all" class="ginger-icon-div"><i class="fa fa-mail-reply-all"></i>mail-reply-all</div>' +
	'<div id="ginger-fa-male" class="ginger-icon-div"><i class="fa fa-male"></i>male</div>' +
	'<div id="ginger-fa-map-marker" class="ginger-icon-div"><i class="fa fa-map-marker"></i>map-marker</div>' +
	'<div id="ginger-fa-meh-o" class="ginger-icon-div"><i class="fa fa-meh-o"></i>meh-o</div>' +
	'<div id="ginger-fa-microphone" class="ginger-icon-div"><i class="fa fa-microphone"></i>microphone</div>' +
	'<div id="ginger-fa-microphone-slash" class="ginger-icon-div"><i class="fa fa-microphone-slash"></i>microphone-slash</div>' +
	'<div id="ginger-fa-minus" class="ginger-icon-div"><i class="fa fa-minus"></i>minus</div>' +
	'<div id="ginger-fa-minus-circle" class="ginger-icon-div"><i class="fa fa-minus-circle"></i>minus-circle</div>' +
	'<div id="ginger-fa-minus-square" class="ginger-icon-div"><i class="fa fa-minus-square"></i>minus-square</div>' +
	'<div id="ginger-fa-minus-square-o" class="ginger-icon-div"><i class="fa fa-minus-square-o"></i>minus-square-o</div>' +
	'<div id="ginger-fa-mobile" class="ginger-icon-div"><i class="fa fa-mobile"></i>mobile</div>' +
	'<div id="ginger-fa-mobile-phone" class="ginger-icon-div"><i class="fa fa-mobile-phone"></i>mobile-phone</div>' +
	'<div id="ginger-fa-money" class="ginger-icon-div"><i class="fa fa-money"></i>money</div>' +
	'<div id="ginger-fa-moon-o" class="ginger-icon-div"><i class="fa fa-moon-o"></i>moon-o</div>' +
	'<div id="ginger-fa-music" class="ginger-icon-div"><i class="fa fa-music"></i>music</div>' +
	'<div id="ginger-fa-pencil" class="ginger-icon-div"><i class="fa fa-pencil"></i>pencil</div>' +
	'<div id="ginger-fa-pencil-square" class="ginger-icon-div"><i class="fa fa-pencil-square"></i>pencil-square</div>' +
	'<div id="ginger-fa-pencil-square-o" class="ginger-icon-div"><i class="fa fa-pencil-square-o"></i>pencil-square-o</div>' +
	'<div id="ginger-fa-phone" class="ginger-icon-div"><i class="fa fa-phone"></i>phone</div>' +
	'<div id="ginger-fa-phone-square" class="ginger-icon-div"><i class="fa fa-phone-square"></i>phone-square</div>' +
	'<div id="ginger-fa-picture-o" class="ginger-icon-div"><i class="fa fa-picture-o"></i>picture-o</div>' +
	'<div id="ginger-fa-plane" class="ginger-icon-div"><i class="fa fa-plane"></i>plane</div>' +
	'<div id="ginger-fa-plus" class="ginger-icon-div"><i class="fa fa-plus"></i>plus</div>' +
	'<div id="ginger-fa-plus-circle" class="ginger-icon-div"><i class="fa fa-plus-circle"></i>plus-circle</div>' +
	'<div id="ginger-fa-plus-square" class="ginger-icon-div"><i class="fa fa-plus-square"></i>plus-square</div>' +
	'<div id="ginger-fa-plus-square-o" class="ginger-icon-div"><i class="fa fa-plus-square-o"></i>plus-square-o</div>' +
	'<div id="ginger-fa-power-off" class="ginger-icon-div"><i class="fa fa-power-off"></i>power-off</div>' +
	'<div id="ginger-fa-print" class="ginger-icon-div"><i class="fa fa-print"></i>print</div>' +
	'<div id="ginger-fa-puzzle-piece" class="ginger-icon-div"><i class="fa fa-puzzle-piece"></i>puzzle-piece</div>' +
	'<div id="ginger-fa-qrcode" class="ginger-icon-div"><i class="fa fa-qrcode"></i>qrcode</div>' +
	'<div id="ginger-fa-question" class="ginger-icon-div"><i class="fa fa-question"></i>question</div>' +
	'<div id="ginger-fa-question-circle" class="ginger-icon-div"><i class="fa fa-question-circle"></i>question-circle</div>' +
	'<div id="ginger-fa-quote-left" class="ginger-icon-div"><i class="fa fa-quote-left"></i>quote-left</div>' +
	'<div id="ginger-fa-quote-right" class="ginger-icon-div"><i class="fa fa-quote-right"></i>quote-right</div>' +
	'<div id="ginger-fa-random" class="ginger-icon-div"><i class="fa fa-random"></i>random</div>' +
	'<div id="ginger-fa-refresh" class="ginger-icon-div"><i class="fa fa-refresh"></i>refresh</div>' +
	'<div id="ginger-fa-reply" class="ginger-icon-div"><i class="fa fa-reply"></i>reply</div>' +
	'<div id="ginger-fa-reply-all" class="ginger-icon-div"><i class="fa fa-reply-all"></i>reply-all</div>' +
	'<div id="ginger-fa-retweet" class="ginger-icon-div"><i class="fa fa-retweet"></i>retweet</div>' +
	'<div id="ginger-fa-road" class="ginger-icon-div"><i class="fa fa-road"></i>road</div>' +
	'<div id="ginger-fa-rocket" class="ginger-icon-div"><i class="fa fa-rocket"></i>rocket</div>' +
	'<div id="ginger-fa-rss" class="ginger-icon-div"><i class="fa fa-rss"></i>rss</div>' +
	'<div id="ginger-fa-rss-square" class="ginger-icon-div"><i class="fa fa-rss-square"></i>rss-square</div>' +
	'<div id="ginger-fa-search" class="ginger-icon-div"><i class="fa fa-search"></i>search</div>' +
	'<div id="ginger-fa-search-minus" class="ginger-icon-div"><i class="fa fa-search-minus"></i>search-minus</div>' +
	'<div id="ginger-fa-search-plus" class="ginger-icon-div"><i class="fa fa-search-plus"></i>search-plus</div>' +
	'<div id="ginger-fa-share" class="ginger-icon-div"><i class="fa fa-share"></i>share</div>' +
	'<div id="ginger-fa-share-square" class="ginger-icon-div"><i class="fa fa-share-square"></i>share-square</div>' +
	'<div id="ginger-fa-share-square-o" class="ginger-icon-div"><i class="fa fa-share-square-o"></i>share-square-o</div>' +
	'<div id="ginger-fa-shield" class="ginger-icon-div"><i class="fa fa-shield"></i>shield</div>' +
	'<div id="ginger-fa-shopping-cart" class="ginger-icon-div"><i class="fa fa-shopping-cart"></i>shopping-cart</div>' +
	'<div id="ginger-fa-sign-in" class="ginger-icon-div"><i class="fa fa-sign-in"></i>sign-in</div>' +
	'<div id="ginger-fa-sign-out" class="ginger-icon-div"><i class="fa fa-sign-out"></i>sign-out</div>' +
	'<div id="ginger-fa-signal" class="ginger-icon-div"><i class="fa fa-signal"></i>signal</div>' +
	'<div id="ginger-fa-sitemap" class="ginger-icon-div"><i class="fa fa-sitemap"></i>sitemap</div>' +
	'<div id="ginger-fa-smile-o" class="ginger-icon-div"><i class="fa fa-smile-o"></i>smile-o</div>' +
	'<div id="ginger-fa-sort" class="ginger-icon-div"><i class="fa fa-sort"></i>sort</div>' +
	'<div id="ginger-fa-sort-alpha-asc" class="ginger-icon-div"><i class="fa fa-sort-alpha-asc"></i>sort-alpha-asc</div>' +
	'<div id="ginger-fa-sort-alpha-desc" class="ginger-icon-div"><i class="fa fa-sort-alpha-desc"></i>sort-alpha-desc</div>' +
	'<div id="ginger-fa-sort-amount-asc" class="ginger-icon-div"><i class="fa fa-sort-amount-asc"></i>sort-amount-asc</div>' +
	'<div id="ginger-fa-sort-amount-desc" class="ginger-icon-div"><i class="fa fa-sort-amount-desc"></i>sort-amount-desc</div>' +
	'<div id="ginger-fa-sort-asc" class="ginger-icon-div"><i class="fa fa-sort-asc"></i>sort-asc</div>' +
	'<div id="ginger-fa-sort-desc" class="ginger-icon-div"><i class="fa fa-sort-desc"></i>sort-desc</div>' +
	'<div id="ginger-fa-sort-down" class="ginger-icon-div"><i class="fa fa-sort-down"></i>sort-down</div>' +
	'<div id="ginger-fa-sort-numeric-asc" class="ginger-icon-div"><i class="fa fa-sort-numeric-asc"></i>sort-numeric-asc</div>' +
	'<div id="ginger-fa-sort-numeric-desc" class="ginger-icon-div"><i class="fa fa-sort-numeric-desc"></i>sort-numeric-desc</div>' +
	'<div id="ginger-fa-sort-up" class="ginger-icon-div"><i class="fa fa-sort-up"></i>sort-up</div>' +
	'<div id="ginger-fa-spinner" class="ginger-icon-div"><i class="fa fa-spinner"></i>spinner</div>' +
	'<div id="ginger-fa-square" class="ginger-icon-div"><i class="fa fa-square"></i>square</div>' +
	'<div id="ginger-fa-square-o" class="ginger-icon-div"><i class="fa fa-square-o"></i>square-o</div>' +
	'<div id="ginger-fa-star" class="ginger-icon-div"><i class="fa fa-star"></i>star</div>' +
	'<div id="ginger-fa-star-half" class="ginger-icon-div"><i class="fa fa-star-half"></i>star-half</div>' +
	'<div id="ginger-fa-star-half-empty" class="ginger-icon-div"><i class="fa fa-star-half-empty"></i>star-half-empty</div>' +
	'<div id="ginger-fa-star-half-full" class="ginger-icon-div"><i class="fa fa-star-half-full"></i>star-half-full</div>' +
	'<div id="ginger-fa-star-half-o" class="ginger-icon-div"><i class="fa fa-star-half-o"></i>star-half-o</div>' +
	'<div id="ginger-fa-star-o" class="ginger-icon-div"><i class="fa fa-star-o"></i>star-o</div>' +
	'<div id="ginger-fa-subscript" class="ginger-icon-div"><i class="fa fa-subscript"></i>subscript</div>' +
	'<div id="ginger-fa-suitcase" class="ginger-icon-div"><i class="fa fa-suitcase"></i>suitcase</div>' +
	'<div id="ginger-fa-sun-o" class="ginger-icon-div"><i class="fa fa-sun-o"></i>sun-o</div>' +
	'<div id="ginger-fa-superscript" class="ginger-icon-div"><i class="fa fa-superscript"></i>superscript</div>' +
	'<div id="ginger-fa-tablet" class="ginger-icon-div"><i class="fa fa-tablet"></i>tablet</div>' +
	'<div id="ginger-fa-tachometer" class="ginger-icon-div"><i class="fa fa-tachometer"></i>tachometer</div>' +
	'<div id="ginger-fa-tag" class="ginger-icon-div"><i class="fa fa-tag"></i>tag</div>' +
	'<div id="ginger-fa-tags" class="ginger-icon-div"><i class="fa fa-tags"></i>tags</div>' +
	'<div id="ginger-fa-tasks" class="ginger-icon-div"><i class="fa fa-tasks"></i>tasks</div>' +
	'<div id="ginger-fa-terminal" class="ginger-icon-div"><i class="fa fa-terminal"></i>terminal</div>' +
	'<div id="ginger-fa-thumb-tack" class="ginger-icon-div"><i class="fa fa-thumb-tack"></i>thumb-tack</div>' +
	'<div id="ginger-fa-thumbs-down" class="ginger-icon-div"><i class="fa fa-thumbs-down"></i>thumbs-down</div>' +
	'<div id="ginger-fa-thumbs-o-down" class="ginger-icon-div"><i class="fa fa-thumbs-o-down"></i>thumbs-o-down</div>' +
	'<div id="ginger-fa-thumbs-o-up" class="ginger-icon-div"><i class="fa fa-thumbs-o-up"></i>thumbs-o-up</div>' +
	'<div id="ginger-fa-thumbs-up" class="ginger-icon-div"><i class="fa fa-thumbs-up"></i>thumbs-up</div>' +
	'<div id="ginger-fa-ticket" class="ginger-icon-div"><i class="fa fa-ticket"></i>ticket</div>' +
	'<div id="ginger-fa-times" class="ginger-icon-div"><i class="fa fa-times"></i>times</div>' +
	'<div id="ginger-fa-times-circle" class="ginger-icon-div"><i class="fa fa-times-circle"></i>times-circle</div>' +
	'<div id="ginger-fa-times-circle-o" class="ginger-icon-div"><i class="fa fa-times-circle-o"></i>times-circle-o</div>' +
	'<div id="ginger-fa-tint" class="ginger-icon-div"><i class="fa fa-tint"></i>tint</div>' +
	'<div id="ginger-fa-toggle-down" class="ginger-icon-div"><i class="fa fa-toggle-down"></i>toggle-down</div>' +
	'<div id="ginger-fa-toggle-left" class="ginger-icon-div"><i class="fa fa-toggle-left"></i>toggle-left</div>' +
	'<div id="ginger-fa-toggle-right" class="ginger-icon-div"><i class="fa fa-toggle-right"></i>toggle-right</div>' +
	'<div id="ginger-fa-toggle-up" class="ginger-icon-div"><i class="fa fa-toggle-up"></i>toggle-up</div>' +
	'<div id="ginger-fa-trash-o" class="ginger-icon-div"><i class="fa fa-trash-o"></i>trash-o</div>' +
	'<div id="ginger-fa-trophy" class="ginger-icon-div"><i class="fa fa-trophy"></i>trophy</div>' +
	'<div id="ginger-fa-truck" class="ginger-icon-div"><i class="fa fa-truck"></i>truck</div>' +
	'<div id="ginger-fa-umbrella" class="ginger-icon-div"><i class="fa fa-umbrella"></i>umbrella</div>' +
	'<div id="ginger-fa-unlock" class="ginger-icon-div"><i class="fa fa-unlock"></i>unlock</div>' +
	'<div id="ginger-fa-unlock-alt" class="ginger-icon-div"><i class="fa fa-unlock-alt"></i>unlock-alt</div>' +
	'<div id="ginger-fa-unsorted" class="ginger-icon-div"><i class="fa fa-unsorted"></i>unsorted</div>' +
	'<div id="ginger-fa-upload" class="ginger-icon-div"><i class="fa fa-upload"></i>upload</div>' +
	'<div id="ginger-fa-user" class="ginger-icon-div"><i class="fa fa-user"></i>user</div>' +
	'<div id="ginger-fa-users" class="ginger-icon-div"><i class="fa fa-users"></i>users</div>' +
	'<div id="ginger-fa-video-camera" class="ginger-icon-div"><i class="fa fa-video-camera"></i>video-camera</div>' +
	'<div id="ginger-fa-volume-down" class="ginger-icon-div"><i class="fa fa-volume-down"></i>volume-down</div>' +
	'<div id="ginger-fa-volume-off" class="ginger-icon-div"><i class="fa fa-volume-off"></i>volume-off</div>' +
	'<div id="ginger-fa-volume-up" class="ginger-icon-div"><i class="fa fa-volume-up"></i>volume-up</div>' +
	'<div id="ginger-fa-warning" class="ginger-icon-div"><i class="fa fa-warning"></i>warning</div>' +
	'<div id="ginger-fa-wheelchair" class="ginger-icon-div"><i class="fa fa-wheelchair"></i>wheelchair</div>' +
	'<div id="ginger-fa-wrench" class="ginger-icon-div"><i class="fa fa-wrench"></i>wrench</div>' +
	'<div id="ginger-fa-check-square" class="ginger-icon-div"><i class="fa fa-check-square"></i>check-square</div>' +
	'<div id="ginger-fa-check-square-o" class="ginger-icon-div"><i class="fa fa-check-square-o"></i>check-square-o</div>' +
	'<div id="ginger-fa-circle" class="ginger-icon-div"><i class="fa fa-circle"></i>circle</div>' +
	'<div id="ginger-fa-circle-o" class="ginger-icon-div"><i class="fa fa-circle-o"></i>circle-o</div>' +
	'<div id="ginger-fa-dot-circle-o" class="ginger-icon-div"><i class="fa fa-dot-circle-o"></i>dot-circle-o</div>' +
	'<div id="ginger-fa-minus-square" class="ginger-icon-div"><i class="fa fa-minus-square"></i>minus-square</div>' +
	'<div id="ginger-fa-minus-square-o" class="ginger-icon-div"><i class="fa fa-minus-square-o"></i>minus-square-o</div>' +
	'<div id="ginger-fa-plus-square" class="ginger-icon-div"><i class="fa fa-plus-square"></i>plus-square</div>' +
	'<div id="ginger-fa-plus-square-o" class="ginger-icon-div"><i class="fa fa-plus-square-o"></i>plus-square-o</div>' +
	'<div id="ginger-fa-square" class="ginger-icon-div"><i class="fa fa-square"></i>square</div>' +
	'<div id="ginger-fa-square-o" class="ginger-icon-div"><i class="fa fa-square-o"></i>square-o</div>' +
	'<div id="ginger-fa-bitcoin" class="ginger-icon-div"><i class="fa fa-bitcoin"></i>bitcoin</div>' +
	'<div id="ginger-fa-btc" class="ginger-icon-div"><i class="fa fa-btc"></i>btc</div>' +
	'<div id="ginger-fa-cny" class="ginger-icon-div"><i class="fa fa-cny"></i>cny</div>' +
	'<div id="ginger-fa-dollar" class="ginger-icon-div"><i class="fa fa-dollar"></i>dollar</div>' +
	'<div id="ginger-fa-eur" class="ginger-icon-div"><i class="fa fa-eur"></i>eur</div>' +
	'<div id="ginger-fa-euro" class="ginger-icon-div"><i class="fa fa-euro"></i>euro</div>' +
	'<div id="ginger-fa-gbp" class="ginger-icon-div"><i class="fa fa-gbp"></i>gbp</div>' +
	'<div id="ginger-fa-inr" class="ginger-icon-div"><i class="fa fa-inr"></i>inr</div>' +
	'<div id="ginger-fa-jpy" class="ginger-icon-div"><i class="fa fa-jpy"></i>jpy</div>' +
	'<div id="ginger-fa-krw" class="ginger-icon-div"><i class="fa fa-krw"></i>krw</div>' +
	'<div id="ginger-fa-money" class="ginger-icon-div"><i class="fa fa-money"></i>money</div>' +
	'<div id="ginger-fa-rmb" class="ginger-icon-div"><i class="fa fa-rmb"></i>rmb</div>' +
	'<div id="ginger-fa-rouble" class="ginger-icon-div"><i class="fa fa-rouble"></i>rouble</div>' +
	'<div id="ginger-fa-rub" class="ginger-icon-div"><i class="fa fa-rub"></i>rub</div>' +
	'<div id="ginger-fa-ruble" class="ginger-icon-div"><i class="fa fa-ruble"></i>ruble</div>' +
	'<div id="ginger-fa-rupee" class="ginger-icon-div"><i class="fa fa-rupee"></i>rupee</div>' +
	'<div id="ginger-fa-try" class="ginger-icon-div"><i class="fa fa-try"></i>try</div>' +
	'<div id="ginger-fa-turkish-lira" class="ginger-icon-div"><i class="fa fa-turkish-lira"></i>turkish-lira</div>' +
	'<div id="ginger-fa-usd" class="ginger-icon-div"><i class="fa fa-usd"></i>usd</div>' +
	'<div id="ginger-fa-won" class="ginger-icon-div"><i class="fa fa-won"></i>won</div>' +
	'<div id="ginger-fa-yen" class="ginger-icon-div"><i class="fa fa-yen"></i>yen</div>' +
	'<div id="ginger-fa-align-center" class="ginger-icon-div"><i class="fa fa-align-center"></i>align-center</div>' +
	'<div id="ginger-fa-align-justify" class="ginger-icon-div"><i class="fa fa-align-justify"></i>align-justify</div>' +
	'<div id="ginger-fa-align-left" class="ginger-icon-div"><i class="fa fa-align-left"></i>align-left</div>' +
	'<div id="ginger-fa-align-right" class="ginger-icon-div"><i class="fa fa-align-right"></i>align-right</div>' +
	'<div id="ginger-fa-bold" class="ginger-icon-div"><i class="fa fa-bold"></i>bold</div>' +
	'<div id="ginger-fa-chain" class="ginger-icon-div"><i class="fa fa-chain"></i>chain</div>' +
	'<div id="ginger-fa-chain-broken" class="ginger-icon-div"><i class="fa fa-chain-broken"></i>chain-broken</div>' +
	'<div id="ginger-fa-clipboard" class="ginger-icon-div"><i class="fa fa-clipboard"></i>clipboard</div>' +
	'<div id="ginger-fa-columns" class="ginger-icon-div"><i class="fa fa-columns"></i>columns</div>' +
	'<div id="ginger-fa-copy" class="ginger-icon-div"><i class="fa fa-copy"></i>copy</div>' +
	'<div id="ginger-fa-cut" class="ginger-icon-div"><i class="fa fa-cut"></i>cut</div>' +
	'<div id="ginger-fa-dedent" class="ginger-icon-div"><i class="fa fa-dedent"></i>dedent</div>' +
	'<div id="ginger-fa-eraser" class="ginger-icon-div"><i class="fa fa-eraser"></i>eraser</div>' +
	'<div id="ginger-fa-file" class="ginger-icon-div"><i class="fa fa-file"></i>file</div>' +
	'<div id="ginger-fa-file-o" class="ginger-icon-div"><i class="fa fa-file-o"></i>file-o</div>' +
	'<div id="ginger-fa-file-text" class="ginger-icon-div"><i class="fa fa-file-text"></i>file-text</div>' +
	'<div id="ginger-fa-file-text-o" class="ginger-icon-div"><i class="fa fa-file-text-o"></i>file-text-o</div>' +
	'<div id="ginger-fa-files-o" class="ginger-icon-div"><i class="fa fa-files-o"></i>files-o</div>' +
	'<div id="ginger-fa-floppy-o" class="ginger-icon-div"><i class="fa fa-floppy-o"></i>floppy-o</div>' +
	'<div id="ginger-fa-font" class="ginger-icon-div"><i class="fa fa-font"></i>font</div>' +
	'<div id="ginger-fa-indent" class="ginger-icon-div"><i class="fa fa-indent"></i>indent</div>' +
	'<div id="ginger-fa-italic" class="ginger-icon-div"><i class="fa fa-italic"></i>italic</div>' +
	'<div id="ginger-fa-link" class="ginger-icon-div"><i class="fa fa-link"></i>link</div>' +
	'<div id="ginger-fa-list" class="ginger-icon-div"><i class="fa fa-list"></i>list</div>' +
	'<div id="ginger-fa-list-alt" class="ginger-icon-div"><i class="fa fa-list-alt"></i>list-alt</div>' +
	'<div id="ginger-fa-list-ol" class="ginger-icon-div"><i class="fa fa-list-ol"></i>list-ol</div>' +
	'<div id="ginger-fa-list-ul" class="ginger-icon-div"><i class="fa fa-list-ul"></i>list-ul</div>' +
	'<div id="ginger-fa-outdent" class="ginger-icon-div"><i class="fa fa-outdent"></i>outdent</div>' +
	'<div id="ginger-fa-paperclip" class="ginger-icon-div"><i class="fa fa-paperclip"></i>paperclip</div>' +
	'<div id="ginger-fa-paste" class="ginger-icon-div"><i class="fa fa-paste"></i>paste</div>' +
	'<div id="ginger-fa-repeat" class="ginger-icon-div"><i class="fa fa-repeat"></i>repeat</div>' +
	'<div id="ginger-fa-rotate-left" class="ginger-icon-div"><i class="fa fa-rotate-left"></i>rotate-left</div>' +
	'<div id="ginger-fa-rotate-right" class="ginger-icon-div"><i class="fa fa-rotate-right"></i>rotate-right</div>' +
	'<div id="ginger-fa-save" class="ginger-icon-div"><i class="fa fa-save"></i>save</div>' +
	'<div id="ginger-fa-scissors" class="ginger-icon-div"><i class="fa fa-scissors"></i>scissors</div>' +
	'<div id="ginger-fa-strikethrough" class="ginger-icon-div"><i class="fa fa-strikethrough"></i>strikethrough</div>' +
	'<div id="ginger-fa-table" class="ginger-icon-div"><i class="fa fa-table"></i>table</div>' +
	'<div id="ginger-fa-text-height" class="ginger-icon-div"><i class="fa fa-text-height"></i>text-height</div>' +
	'<div id="ginger-fa-text-width" class="ginger-icon-div"><i class="fa fa-text-width"></i>text-width</div>' +
	'<div id="ginger-fa-th" class="ginger-icon-div"><i class="fa fa-th"></i>th</div>' +
	'<div id="ginger-fa-th-large" class="ginger-icon-div"><i class="fa fa-th-large"></i>th-large</div>' +
	'<div id="ginger-fa-th-list" class="ginger-icon-div"><i class="fa fa-th-list"></i>th-list</div>' +
	'<div id="ginger-fa-underline" class="ginger-icon-div"><i class="fa fa-underline"></i>underline</div>' +
	'<div id="ginger-fa-undo" class="ginger-icon-div"><i class="fa fa-undo"></i>undo</div>' +
	'<div id="ginger-fa-unlink" class="ginger-icon-div"><i class="fa fa-unlink"></i>unlink</div>' +
	'<div id="ginger-fa-angle-double-down" class="ginger-icon-div"><i class="fa fa-angle-double-down"></i>angle-double-down</div>' +
	'<div id="ginger-fa-angle-double-left" class="ginger-icon-div"><i class="fa fa-angle-double-left"></i>angle-double-left</div>' +
	'<div id="ginger-fa-angle-double-right" class="ginger-icon-div"><i class="fa fa-angle-double-right"></i>angle-double-right</div>' +
	'<div id="ginger-fa-angle-double-up" class="ginger-icon-div"><i class="fa fa-angle-double-up"></i>angle-double-up</div>' +
	'<div id="ginger-fa-angle-down" class="ginger-icon-div"><i class="fa fa-angle-down"></i>angle-down</div>' +
	'<div id="ginger-fa-angle-left" class="ginger-icon-div"><i class="fa fa-angle-left"></i>angle-left</div>' +
	'<div id="ginger-fa-angle-right" class="ginger-icon-div"><i class="fa fa-angle-right"></i>angle-right</div>' +
	'<div id="ginger-fa-angle-up" class="ginger-icon-div"><i class="fa fa-angle-up"></i>angle-up</div>' +
	'<div id="ginger-fa-arrow-circle-down" class="ginger-icon-div"><i class="fa fa-arrow-circle-down"></i>arrow-circle-down</div>' +
	'<div id="ginger-fa-arrow-circle-left" class="ginger-icon-div"><i class="fa fa-arrow-circle-left"></i>arrow-circle-left</div>' +
	'<div id="ginger-fa-arrow-circle-o-down" class="ginger-icon-div"><i class="fa fa-arrow-circle-o-down"></i>arrow-circle-o-down</div>' +
	'<div id="ginger-fa-arrow-circle-o-left" class="ginger-icon-div"><i class="fa fa-arrow-circle-o-left"></i>arrow-circle-o-left</div>' +
	'<div id="ginger-fa-arrow-circle-o-right" class="ginger-icon-div"><i class="fa fa-arrow-circle-o-right"></i>arrow-circle-o-right</div>' +
	'<div id="ginger-fa-arrow-circle-o-up" class="ginger-icon-div"><i class="fa fa-arrow-circle-o-up"></i>arrow-circle-o-up</div>' +
	'<div id="ginger-fa-arrow-circle-right" class="ginger-icon-div"><i class="fa fa-arrow-circle-right"></i>arrow-circle-right</div>' +
	'<div id="ginger-fa-arrow-circle-up" class="ginger-icon-div"><i class="fa fa-arrow-circle-up"></i>arrow-circle-up</div>' +
	'<div id="ginger-fa-arrow-down" class="ginger-icon-div"><i class="fa fa-arrow-down"></i>arrow-down</div>' +
	'<div id="ginger-fa-arrow-left" class="ginger-icon-div"><i class="fa fa-arrow-left"></i>arrow-left</div>' +
	'<div id="ginger-fa-arrow-right" class="ginger-icon-div"><i class="fa fa-arrow-right"></i>arrow-right</div>' +
	'<div id="ginger-fa-arrow-up" class="ginger-icon-div"><i class="fa fa-arrow-up"></i>arrow-up</div>' +
	'<div id="ginger-fa-arrows" class="ginger-icon-div"><i class="fa fa-arrows"></i>arrows</div>' +
	'<div id="ginger-fa-arrows-alt" class="ginger-icon-div"><i class="fa fa-arrows-alt"></i>arrows-alt</div>' +
	'<div id="ginger-fa-arrows-h" class="ginger-icon-div"><i class="fa fa-arrows-h"></i>arrows-h</div>' +
	'<div id="ginger-fa-arrows-v" class="ginger-icon-div"><i class="fa fa-arrows-v"></i>arrows-v</div>' +
	'<div id="ginger-fa-caret-down" class="ginger-icon-div"><i class="fa fa-caret-down"></i>caret-down</div>' +
	'<div id="ginger-fa-caret-left" class="ginger-icon-div"><i class="fa fa-caret-left"></i>caret-left</div>' +
	'<div id="ginger-fa-caret-right" class="ginger-icon-div"><i class="fa fa-caret-right"></i>caret-right</div>' +
	'<div id="ginger-fa-caret-square-o-down" class="ginger-icon-div"><i class="fa fa-caret-square-o-down"></i>caret-square-o-down</div>' +
	'<div id="ginger-fa-caret-square-o-left" class="ginger-icon-div"><i class="fa fa-caret-square-o-left"></i>caret-square-o-left</div>' +
	'<div id="ginger-fa-caret-square-o-right" class="ginger-icon-div"><i class="fa fa-caret-square-o-right"></i>caret-square-o-right</div>' +
	'<div id="ginger-fa-caret-square-o-up" class="ginger-icon-div"><i class="fa fa-caret-square-o-up"></i>caret-square-o-up</div>' +
	'<div id="ginger-fa-caret-up" class="ginger-icon-div"><i class="fa fa-caret-up"></i>caret-up</div>' +
	'<div id="ginger-fa-chevron-circle-down" class="ginger-icon-div"><i class="fa fa-chevron-circle-down"></i>chevron-circle-down</div>' +
	'<div id="ginger-fa-chevron-circle-left" class="ginger-icon-div"><i class="fa fa-chevron-circle-left"></i>chevron-circle-left</div>' +
	'<div id="ginger-fa-chevron-circle-right" class="ginger-icon-div"><i class="fa fa-chevron-circle-right"></i>chevron-circle-right</div>' +
	'<div id="ginger-fa-chevron-circle-up" class="ginger-icon-div"><i class="fa fa-chevron-circle-up"></i>chevron-circle-up</div>' +
	'<div id="ginger-fa-chevron-down" class="ginger-icon-div"><i class="fa fa-chevron-down"></i>chevron-down</div>' +
	'<div id="ginger-fa-chevron-left" class="ginger-icon-div"><i class="fa fa-chevron-left"></i>chevron-left</div>' +
	'<div id="ginger-fa-chevron-right" class="ginger-icon-div"><i class="fa fa-chevron-right"></i>chevron-right</div>' +
	'<div id="ginger-fa-chevron-up" class="ginger-icon-div"><i class="fa fa-chevron-up"></i>chevron-up</div>' +
	'<div id="ginger-fa-hand-o-down" class="ginger-icon-div"><i class="fa fa-hand-o-down"></i>hand-o-down</div>' +
	'<div id="ginger-fa-hand-o-left" class="ginger-icon-div"><i class="fa fa-hand-o-left"></i>hand-o-left</div>' +
	'<div id="ginger-fa-hand-o-right" class="ginger-icon-div"><i class="fa fa-hand-o-right"></i>hand-o-right</div>' +
	'<div id="ginger-fa-hand-o-up" class="ginger-icon-div"><i class="fa fa-hand-o-up"></i>hand-o-up</div>' +
	'<div id="ginger-fa-long-arrow-down" class="ginger-icon-div"><i class="fa fa-long-arrow-down"></i>long-arrow-down</div>' +
	'<div id="ginger-fa-long-arrow-left" class="ginger-icon-div"><i class="fa fa-long-arrow-left"></i>long-arrow-left</div>' +
	'<div id="ginger-fa-long-arrow-right" class="ginger-icon-div"><i class="fa fa-long-arrow-right"></i>long-arrow-right</div>' +
	'<div id="ginger-fa-long-arrow-up" class="ginger-icon-div"><i class="fa fa-long-arrow-up"></i>long-arrow-up</div>' +
	'<div id="ginger-fa-toggle-down" class="ginger-icon-div"><i class="fa fa-toggle-down"></i>toggle-down</div>' +
	'<div id="ginger-fa-toggle-left" class="ginger-icon-div"><i class="fa fa-toggle-left"></i>toggle-left</div>' +
	'<div id="ginger-fa-toggle-right" class="ginger-icon-div"><i class="fa fa-toggle-right"></i>toggle-right</div>' +
	'<div id="ginger-fa-toggle-up" class="ginger-icon-div"><i class="fa fa-toggle-up"></i>toggle-up</div>' +
	'<div id="ginger-fa-arrows-alt" class="ginger-icon-div"><i class="fa fa-arrows-alt"></i>arrows-alt</div>' +
	'<div id="ginger-fa-backward" class="ginger-icon-div"><i class="fa fa-backward"></i>backward</div>' +
	'<div id="ginger-fa-compress" class="ginger-icon-div"><i class="fa fa-compress"></i>compress</div>' +
	'<div id="ginger-fa-eject" class="ginger-icon-div"><i class="fa fa-eject"></i>eject</div>' +
	'<div id="ginger-fa-expand" class="ginger-icon-div"><i class="fa fa-expand"></i>expand</div>' +
	'<div id="ginger-fa-fast-backward" class="ginger-icon-div"><i class="fa fa-fast-backward"></i>fast-backward</div>' +
	'<div id="ginger-fa-fast-forward" class="ginger-icon-div"><i class="fa fa-fast-forward"></i>fast-forward</div>' +
	'<div id="ginger-fa-forward" class="ginger-icon-div"><i class="fa fa-forward"></i>forward</div>' +
	'<div id="ginger-fa-pause" class="ginger-icon-div"><i class="fa fa-pause"></i>pause</div>' +
	'<div id="ginger-fa-play" class="ginger-icon-div"><i class="fa fa-play"></i>play</div>' +
	'<div id="ginger-fa-play-circle" class="ginger-icon-div"><i class="fa fa-play-circle"></i>play-circle</div>' +
	'<div id="ginger-fa-play-circle-o" class="ginger-icon-div"><i class="fa fa-play-circle-o"></i>play-circle-o</div>' +
	'<div id="ginger-fa-step-backward" class="ginger-icon-div"><i class="fa fa-step-backward"></i>step-backward</div>' +
	'<div id="ginger-fa-step-forward" class="ginger-icon-div"><i class="fa fa-step-forward"></i>step-forward</div>' +
	'<div id="ginger-fa-stop" class="ginger-icon-div"><i class="fa fa-stop"></i>stop</div>' +
	'<div id="ginger-fa-youtube-play" class="ginger-icon-div"><i class="fa fa-youtube-play"></i>youtube-play</div>' +
	'<div id="ginger-fa-adn" class="ginger-icon-div"><i class="fa fa-adn"></i>adn</div>' +
	'<div id="ginger-fa-android" class="ginger-icon-div"><i class="fa fa-android"></i>android</div>' +
	'<div id="ginger-fa-apple" class="ginger-icon-div"><i class="fa fa-apple"></i>apple</div>' +
	'<div id="ginger-fa-bitbucket" class="ginger-icon-div"><i class="fa fa-bitbucket"></i>bitbucket</div>' +
	'<div id="ginger-fa-bitbucket-square" class="ginger-icon-div"><i class="fa fa-bitbucket-square"></i>bitbucket-square</div>' +
	'<div id="ginger-fa-bitcoin" class="ginger-icon-div"><i class="fa fa-bitcoin"></i>bitcoin</div>' +
	'<div id="ginger-fa-btc" class="ginger-icon-div"><i class="fa fa-btc"></i>btc</div>' +
	'<div id="ginger-fa-css3" class="ginger-icon-div"><i class="fa fa-css3"></i>css3</div>' +
	'<div id="ginger-fa-dribbble" class="ginger-icon-div"><i class="fa fa-dribbble"></i>dribbble</div>' +
	'<div id="ginger-fa-dropbox" class="ginger-icon-div"><i class="fa fa-dropbox"></i>dropbox</div>' +
	'<div id="ginger-fa-facebook" class="ginger-icon-div"><i class="fa fa-facebook"></i>facebook</div>' +
	'<div id="ginger-fa-facebook-square" class="ginger-icon-div"><i class="fa fa-facebook-square"></i>facebook-square</div>' +
	'<div id="ginger-fa-flickr" class="ginger-icon-div"><i class="fa fa-flickr"></i>flickr</div>' +
	'<div id="ginger-fa-foursquare" class="ginger-icon-div"><i class="fa fa-foursquare"></i>foursquare</div>' +
	'<div id="ginger-fa-github" class="ginger-icon-div"><i class="fa fa-github"></i>github</div>' +
	'<div id="ginger-fa-github-alt" class="ginger-icon-div"><i class="fa fa-github-alt"></i>github-alt</div>' +
	'<div id="ginger-fa-github-square" class="ginger-icon-div"><i class="fa fa-github-square"></i>github-square</div>' +
	'<div id="ginger-fa-gittip" class="ginger-icon-div"><i class="fa fa-gittip"></i>gittip</div>' +
	'<div id="ginger-fa-google-plus" class="ginger-icon-div"><i class="fa fa-google-plus"></i>google-plus</div>' +
	'<div id="ginger-fa-google-plus-square" class="ginger-icon-div"><i class="fa fa-google-plus-square"></i>google-plus-square</div>' +
	'<div id="ginger-fa-html5" class="ginger-icon-div"><i class="fa fa-html5"></i>html5</div>' +
	'<div id="ginger-fa-instagram" class="ginger-icon-div"><i class="fa fa-instagram"></i>instagram</div>' +
	'<div id="ginger-fa-linkedin" class="ginger-icon-div"><i class="fa fa-linkedin"></i>linkedin</div>' +
	'<div id="ginger-fa-linkedin-square" class="ginger-icon-div"><i class="fa fa-linkedin-square"></i>linkedin-square</div>' +
	'<div id="ginger-fa-linux" class="ginger-icon-div"><i class="fa fa-linux"></i>linux</div>' +
	'<div id="ginger-fa-maxcdn" class="ginger-icon-div"><i class="fa fa-maxcdn"></i>maxcdn</div>' +
	'<div id="ginger-fa-pagelines" class="ginger-icon-div"><i class="fa fa-pagelines"></i>pagelines</div>' +
	'<div id="ginger-fa-pinterest" class="ginger-icon-div"><i class="fa fa-pinterest"></i>pinterest</div>' +
	'<div id="ginger-fa-pinterest-square" class="ginger-icon-div"><i class="fa fa-pinterest-square"></i>pinterest-square</div>' +
	'<div id="ginger-fa-renren" class="ginger-icon-div"><i class="fa fa-renren"></i>renren</div>' +
	'<div id="ginger-fa-skype" class="ginger-icon-div"><i class="fa fa-skype"></i>skype</div>' +
	'<div id="ginger-fa-stack-exchange" class="ginger-icon-div"><i class="fa fa-stack-exchange"></i>stack-exchange</div>' +
	'<div id="ginger-fa-stack-overflow" class="ginger-icon-div"><i class="fa fa-stack-overflow"></i>stack-overflow</div>' +
	'<div id="ginger-fa-trello" class="ginger-icon-div"><i class="fa fa-trello"></i>trello</div>' +
	'<div id="ginger-fa-tumblr" class="ginger-icon-div"><i class="fa fa-tumblr"></i>tumblr</div>' +
	'<div id="ginger-fa-tumblr-square" class="ginger-icon-div"><i class="fa fa-tumblr-square"></i>tumblr-square</div>' +
	'<div id="ginger-fa-twitter" class="ginger-icon-div"><i class="fa fa-twitter"></i>twitter</div>' +
	'<div id="ginger-fa-twitter-square" class="ginger-icon-div"><i class="fa fa-twitter-square"></i>twitter-square</div>' +
	'<div id="ginger-fa-vimeo-square" class="ginger-icon-div"><i class="fa fa-vimeo-square"></i>vimeo-square</div>' +
	'<div id="ginger-fa-vk" class="ginger-icon-div"><i class="fa fa-vk"></i>vk</div>' +
	'<div id="ginger-fa-weibo" class="ginger-icon-div"><i class="fa fa-weibo"></i>weibo</div>' +
	'<div id="ginger-fa-windows" class="ginger-icon-div"><i class="fa fa-windows"></i>windows</div>' +
	'<div id="ginger-fa-xing" class="ginger-icon-div"><i class="fa fa-xing"></i>xing</div>' +
	'<div id="ginger-fa-xing-square" class="ginger-icon-div"><i class="fa fa-xing-square"></i>xing-square</div>' +
	'<div id="ginger-fa-youtube" class="ginger-icon-div"><i class="fa fa-youtube"></i>youtube</div>' +
	'<div id="ginger-fa-youtube-play" class="ginger-icon-div"><i class="fa fa-youtube-play"></i>youtube-play</div>' +
	'<div id="ginger-fa-youtube-square" class="ginger-icon-div"><i class="fa fa-youtube-square"></i>youtube-square</div>' +
	'<div id="ginger-fa-ambulance" class="ginger-icon-div"><i class="fa fa-ambulance"></i>ambulance</div>' +
	'<div id="ginger-fa-h-square" class="ginger-icon-div"><i class="fa fa-h-square"></i>h-square</div>' +
	'<div id="ginger-fa-hospital-o" class="ginger-icon-div"><i class="fa fa-hospital-o"></i>hospital-o</div>' +
	'<div id="ginger-fa-medkit" class="ginger-icon-div"><i class="fa fa-medkit"></i>medkit</div>' +
	'<div id="ginger-fa-plus-square" class="ginger-icon-div"><i class="fa fa-plus-square"></i>plus-square</div>' +
	'<div id="ginger-fa-stethoscope" class="ginger-icon-div"><i class="fa fa-stethoscope"></i>stethoscope</div>' +
	'<div id="ginger-fa-user-md" class="ginger-icon-div"><i class="fa fa-user-md"></i>user-md</div>' +
	'<div id="ginger-fa-wheelchair" class="ginger-icon-div"><i class="fa fa-wheelchair"></i>wheelchair</div>' +
	'</div></div></div>');

	var popup_id;

	var container = $('#isotope-sortable'); // cache the isotope container item because it is called multiple times
	
	var iso_container = $("#isotope-container");

	$(".ginger-icon-div").mouseenter(function () {
		$(this).addClass('icon-selected');
	}).mouseleave(function () {
		$(this).removeClass('icon-selected');
	}).on("click", function(){
		console.log(popup_id);
		$("#" + popup_id + " .field-icon-selected lable i").addClass("fa fa-" + $(this).text());
		iso_container.fadeOut();
	});

	$("#isotope-close").on("click", function () {
		iso_container.fadeOut();
	});

	$('<p class="field-icon description description-thin"><lable>Icon<br><a href="#" class="icon-popup"><i class="fa fa-plus"></i></a></lable></p>').insertBefore(".field-move");		
	$('<p class="field-icon-selected description description-thin"><lable>Selected Icon<br><i class="" style="font-size: 24px;"></i></lable></p>').insertBefore(".field-move");


	$(".icon-popup").on("click", function(event){
		event.preventDefault();	
		popup_id = $(this).parent().parent().parent().attr("id");
		iso_container.fadeIn();
		
		container.isotope({
			// options
			filter : '.ginger-icon-div',
			layoutMode : 'fitRows'
		});
	});
	
	var items = []; // Declare item array up here so our custom function can use it as well as doc-ready stuff
	// stick items into array declared above as a series of objects
	// we could include more than just the name in here, to build up a bigger search 'index'
	$('.ginger-icon-div').each(function(){
		var tmp = {};
		tmp.id = $(this).attr('id');
		tmp.name = ($(this).text().toLowerCase());
		items.push( tmp );
	});
		
	// User types in search box - call our search function and supply lower-case keyword as argument
	$('#search').bind('keyup', function() {
		isotopeSearch( $(this).val().toLowerCase() );
		console.log($(this).val().toLowerCase());
	});
	
	// User clicks 'show all', make call to search function with an empty keyword var
	$('#showAll').click(function(){
		$('#search').val(''); // reset input el value
		isotopeSearch(false); // restores all items
		return false;	
	});

	/**
	 * Function takes single keyword as argument,
	 * checks array of item objects and looks for substring matches between item.name and keyword,
	 * if matches are found calls isotope.filter function on our collection.
	 */
	function isotopeSearch(kwd)
	{
		// reset results arrays
		var matches = [];
		var misses = [];

		$('.ginger-icon-div').removeClass('match miss'); // get rid of any existing classes
		$('#noMatches').hide(); // ensure this is always hidden when we start a new query

		if ( (kwd != '') && (kwd.length >= 2) ) { // min 2 chars to execute query:
			
			// loop through brands array		
			_.each(items, function(item){
				if ( item.name.indexOf(kwd) !== -1 ) { // keyword matches element
					matches.push( $('#'+item.id)[0] );
				} else {
					misses.push( $('#'+item.id)[0] );
				}
			});
			
			// add appropriate classes and call isotope.filter
			$(matches).addClass('match');
			$(misses).addClass('miss');
			container.isotope({ filter: $(matches) }); // isotope.filter will take a jQuery object instead of a class name as an argument - sweet!
			
			if (matches.length == 0) {
				$('#noMatches').show(); // deal with empty results set
			}
			
		} else {
			// show all if keyword less than 2 chars
			$container.isotope({ filter: '.ginger-icon-div' });

		}

	}


})(jQuery);
