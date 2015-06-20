---
layout: page
title: Glitch Gallery
---

<style>
	.galleria {
		height: 70em;
		background: #f4f4f4;
	}

	.galleria > div {
		backgroun: #f4f4f4;
	}
</style>
<div class="galleria">
	<img src="/images/glitch/roots/roots.jpg">
	<img src="/images/glitch/roots/set1.jpg">
	<img src="/images/glitch/roots/set4.jpg">
	<img src="/images/glitch/roots/set3.jpg">
</div>


<script src="/js/jquery-1.11.3.min.js"></script>
<script src="/js/galleria-1.4.2.min.js"></script>
<script>
Galleria.loadTheme('/static/themes/classic/galleria.classic.min.js');
Galleria.run('.galleria');
</script>