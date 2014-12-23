<?php get_header(); ?>

<?php if (have_posts()) :
	while (have_posts()) : the_post();
		if( have_rows('screen') ): ?>

		<header>

			<h1><!--[if lte IE 9]>
				<img src="<?php echo get_stylesheet_directory_uri() ?>/images/wist-logo.gif" alt="<?php bloginfo( 'name' ); ?>" />
			<![endif]-->
			<!--[if gt IE 10]>
				<img class="logoa" src="<?php echo get_stylesheet_directory_uri() ?>/images/wist-logo-a.svg" alt="<?php bloginfo( 'name' ); ?>" />
				<img class="logob" src="<?php echo get_stylesheet_directory_uri() ?>/images/wist-logo-b.svg" alt="<?php bloginfo( 'name' ); ?>" style="display: none;" />
			<![endif]-->
			<!--[if !IE]> -->
				<img class="logoa" src="<?php echo get_stylesheet_directory_uri() ?>/images/wist-logo-a.svg" alt="<?php bloginfo( 'name' ); ?>" />
				<img class="logob" src="<?php echo get_stylesheet_directory_uri() ?>/images/wist-logo-b.svg" alt="<?php bloginfo( 'name' ); ?>" style="display: none;" />
			<!-- <![endif]--></h1>

			<nav>
				<ul>
					<?php while ( have_rows('screen') ) : the_row(); ?>
						<li id="menu-<?php the_sub_field('url_slug'); ?>"><a href="#<?php the_sub_field('url_slug'); ?>"><span class="numeral"><?php the_sub_field('roman_numeral'); ?></span><span class="dots">.....</span><span class="title"><?php the_sub_field('title'); ?></span></a></li>
					<?php endwhile; ?>
				</ul>
			</nav>

		</header>

		<?php while ( have_rows('screen') ) : the_row(); ?>
			<section id="<?php the_sub_field('url_slug'); ?>">
				<div class="padding">
					<div class="spacer">
						<div class="ratio"></div>
						<h2><?php the_sub_field('roman_numeral'); ?>. <?php the_sub_field('title'); ?></h2>
					</div>
					<?php the_sub_field('copy'); ?>
					<?php $image = get_sub_field('image');
						if ( $image ) : ?>
						<div class="image"><img src="<?php echo $image['url']; ?>" alt="<?php echo $image['title']; ?>" /></div>
						<?php endif; ?>
				</div>
			</section>
		<?php endwhile; ?>

		<?php endif;

	endwhile;
endif; ?>

<?php get_footer(); ?>


