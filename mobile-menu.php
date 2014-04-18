<?php
/*
Plugin Name: GingerGear Mobile Menu 
Plugin URI: http://gingergear.com/mobile-menu/
Version: 0.1
Author: Yuncheng Mao
Description: You can use this to generate mobile style menu
Text Domain: Mobile Menu
Domain Path: /languages
*/

/******************** Start plugin activate and delete related function ********************/ 





/******************** End activate and delete related function ********************/

/******************** Start stylesheet and js in front end ********************/
	function mobile_scripts_and_stylesheets () { 
		wp_enqueue_script('mobile-menu', plugins_url('js/front-end-menu.js', __FILE__), array(), '1.0.0', ture);
		wp_enqueue_script('mobile-keypad', plugins_url('js/front-end-keypad.js', __FILE__), array(), '1.0.0', ture);
		wp_enqueue_style('mobile-menu-css', plugins_url('css/front-end-menu.css', __FILE__), array(), '1.0.0');
		wp_enqueue_style('mobile-keypad-css', plugins_url('css/keypad.css', __FILE__), array(), '1.0.0');
	}

	add_action('wp_enqueue_scripts', 'mobile_scripts_and_stylesheets');
/******************** End enqueue ********************/

/******************** Start style and js in admin panel ********************/
	function ginger_menu_admin_enqueue () {
		$screen= get_current_screen();
		if( $screen->base == "nav-menus"){
			wp_enqueue_script('admin-isotope', plugins_url('js/isotope.pkgd.js', __FILE__), array(), '1.0.0', ture);
			//wp_enqueue_script('admin-isotope-search', plugins_url('js/isotope-search.js', __FILE__), array(), '1.0.0', ture);
			wp_enqueue_script('admin-ginger-menu', plugins_url('js/admin-ginger-menu.js', __FILE__), array(), '1.0.0', ture);
			wp_enqueue_style('amdin-ginger-menu-css', plugins_url('css/admin-ginger-menu.css', __FILE__), array(), '1.0.0');		
			wp_enqueue_style('amdin-ginger-icon-css', plugins_url('css/font-awesome.min.css', __FILE__), array(), '1.0.0');
		}
	}

	add_action('admin_enqueue_scripts', 'ginger_menu_admin_enqueue');
/******************** End admin enqueue ********************/

/******************** Start add icon support to menu ********************/
/******************** End icon support ********************/

/******************** Start custom mobile menu walker ********************/
	class Mobile_Menu_Walker extends Walker_Nav_Menu {

		private $count = 0;

		/**
	         * Start the element output.
	         *
	         * @see Walker::start_el()
	         *
	         * @since 3.0.0
	         *
	         * @param string $output Passed by reference. Used to append additional content.
	         * @param object $item   Menu item data object.
	         * @param int    $depth  Depth of menu item. Used for padding.
	         * @param array  $args   An array of arguments. @see wp_nav_menu()
	         * @param int    $id     Current item ID.
	         */

	        function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
	                $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
	
	                $class_names = $value = '';
	
	                $classes = empty( $item->classes ) ? array() : (array) $item->classes;
	                $classes[] = 'menu-item-' . $item->ID;
	
	                /**
	                 * Filter the CSS class(es) applied to a menu item's <li>.
	                 *
	                 * @since 3.0.0
	                 *
	                 * @param array  $classes The CSS classes that are applied to the menu item's <li>.
	                 * @param object $item    The current menu item.
	                 * @param array  $args    An array of arguments. @see wp_nav_menu()
	                 */
	                $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
	                $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . 'mobile-menu"' : '';
	
	                /**
	                 * Filter the ID applied to a menu item's <li>.
	                 *
	                 * @since 3.0.1
	                 *
	                 * @param string The ID that is applied to the menu item's <li>.
	                 * @param object $item The current menu item.
	                 * @param array $args An array of arguments. @see wp_nav_menu()
	                 */
	                $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
	                $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';
			if( $this->count == 0){
				$output .= $indent . "<li class=\"space\"></li>\n";
				$this->count++;
			}
	                $output .= $indent . '<li' . $id . $value . $class_names .'>';
	
	                $atts = array();
	                $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
	                $atts['target'] = ! empty( $item->target )     ? $item->target     : '';
	                $atts['rel']    = ! empty( $item->xfn )        ? $item->xfn        : '';
	                $atts['href']   = ! empty( $item->url )        ? $item->url        : '';
	
	                /**
	                 * Filter the HTML attributes applied to a menu item's <a>.
	                 *
	                 * @since 3.6.0
	                 *
	                 * @param array $atts {
	                 *     The HTML attributes applied to the menu item's <a>, empty strings are ignored.
	                 *
	                 *     @type string $title  The title attribute.
	                 *     @type string $target The target attribute.
	                 *     @type string $rel    The rel attribute.
	                 *     @type string $href   The href attribute.
	                 * }
	                 * @param object $item The current menu item.
	                 * @param array  $args An array of arguments. @see wp_nav_menu()
	                 */
	                $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args );
	
	                $attributes = '';
	                foreach ( $atts as $attr => $value ) {
	                        if ( ! empty( $value ) ) {
	                                $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
	                                $attributes .= ' ' . $attr . '="' . $value . '"';
	                        }
	                }
	
	                $item_output = $args->before;
	                $item_output .= '<a'. $attributes .'>';
			$item_output .= "\n\t<i class=\"fa fa-home\"></i>";
	                /** This filter is documented in wp-includes/post-template.php */
	                $item_output .= $args->link_before . $args->link_after;
	                $item_output .= "</a>";
			$item_output .= "<span>" . apply_filters( 'the_title', $item->title, $item->ID ) . "</span>";
	                $item_output .= $args->after;
	
	                /**
	                 * Filter a menu item's starting output.
	                 *
	                 * The menu item's starting output only includes $args->before, the opening <a>,
	                 * the menu item's title, the closing </a>, and $args->after. Currently, there is
	                 * no filter for modifying the opening and closing <li> for a menu item.
	                 *
	                 * @since 3.0.0
	                 *
	                 * @param string $item_output The menu item's starting HTML output.
	                 * @param object $item        Menu item data object.
	                 * @param int    $depth       Depth of menu item. Used for padding.
	                 * @param array  $args        An array of arguments. @see wp_nav_menu()
	                 */
			$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
			$output .= "<li class=\"space\"></li>";
	        }
	}
/******************** End walker ********************/

/******************** Start for adding keypad div ********************/
	function add_keypad_div(){
	?>
		<div id="keypad">
			<div id="display" class="display"></div>
			<div id="pad" class="pad">
				<ul>
					<li id="hidden-color"></li>
					<li id="button-1" class="button row-head"><span>1</span>

					</li>
					<li class="button"><span>2</span>

					</li>
					<li class="button"><span>3</span>

					</li>
					<li class="button"><span>Backspace</span>

					</li>
					<li class="button row-head"><span>4</span>

					</li>
					<li class="button"><span>5</span>

					</li>
					<li class="button"><span>6</span>

					</li>
					<li class="button"><span>Clean</span>

					</li>
					<li class="button row-head"><span>7</span>

					</li>
					<li class="button"><span>8</span>

					</li>
					<li class="button"><span>9</span>

					</li>
					<li class="button"><span>Submit</span>

					</li>
					<br style="clear: both;" />
				</ul>
			</div>	
		</div>
	<?php
	}

	add_action('wp_footer', 'add_keypad_div');
/******************** End ********************/

/******************** Start for adding map div ********************/
/******************** End ********************/

/******************** ********************/
/******************** ********************/

/******************** ********************/
/******************** ********************/

?>
