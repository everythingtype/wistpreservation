<?php get_header(); ?>

<?php if (have_posts()) :
	while (have_posts()) : the_post();
		if( have_rows('screen') ): ?>

		<header>

			<h1><img src="<?php echo get_stylesheet_directory_uri() ?>/images/wist-temp-logo.png" alt="<?php bloginfo( 'name' ); ?>" /></h1>

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
					<h2><?php the_sub_field('roman_numeral'); ?>. <?php the_sub_field('title'); ?></h2>
					<?php the_sub_field('copy'); ?>
				</div>
			</section>
		<?php endwhile; ?>

		<?php endif;

	endwhile;
endif; ?>

<?php get_footer(); ?>


