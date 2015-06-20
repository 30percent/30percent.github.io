---
layout: page
title: About Me
---

<p class="message">
  Hey! My name is Mark Todd, a Computer Science graduate from Clemson University
</p>

I've been interested in computers and software since I was 14 writing equation handlers and text adventures in TI-BASIC. Most of my work has been in C, but recently web-based languages (DjangoPython, JS, PHP) have been the center of my projects. 

During college I was a paid Undergraduate Researcher for the Reusable Software Research Group at Clemson that focuses on the verifiable programming language RESOLVE. During my tenure I worked with the compiler written in Java and created the design for the translation from [RESOLVE to C](https://github.com/30percent/C-Translation).

## Associated Projects
* [RESOLVE through Clemson](http://www.cs.clemson.edu/resolve/): A project whose goal is "of a future in which no production software is considered properly engineered unless it has been fully specified, and fully verified as satisfying these specifications".

## Languages Experience

<div style="width:45em">
	<ul>
		<li>Imperative/OOP Languages:
			<div class="skill_list">
				<div><i>C</i><div class="experience" data-info="2.5" data-name="C"></div></div>
				<div><i>Java</i><div class="experience" data-info="1.5" data-name="Java"></div></div>
				<div><i>Python</i><div class="experience" data-info="1.5" data-name="Python"></div></div>
				<div class="exp-context" style="clear:both;"><p></p></div>
			</div>
				<div style="clear:both;"></div>
		</li>
		<li> Scripting Languages
			<div class="skill_list">
				<div><i>PHP</i><div class="experience" data-info="1.5" data-name="PHP"></div></div>
				<div><i>BASH</i><div class="experience" data-info="2" data-name="BASH"></div></div>
				<div><i>GAwk</i><div class="experience" data-info="2" data-name="GAwk"></div></div>
				<div class="exp-context" style="clear:both;"><p></p></div>
			</div>
			<div style="clear:both;"></div>
		</li>
		<li> Web-Based
			<div class="skill_list">
				<div><i>HTML</i><div class="experience" data-info="2" data-name="HTML"></div></div>
				<div><i>JS/jQuery</i><div class="experience" data-info="1.5" data-name="JS/jQuery"></div></div>
				<div><i>CSS/SASS</i><div class="experience" data-info="1.5" data-name="CSS/SASS"></div></div>
				<div><i>MySQL</i><div class="experience" data-info="1.5" data-name="MySQL"></div></div>
				<div class="exp-context" style="clear:both;"><p></p></div>
			</div>
			<div style="clear:both;"></div>
		</li>
	</ul>
	<div style="clear:both;"></div> 
</div>
  
#### Cursory Experience
* OCAML (functional)
* Haskell (functional)
* Prolog (declarative)
* ANTLR (language parsing)
* Chandy's UNITY

## Free Time
* I play the guitar, banjo, and ukelele, currently participating every week in the Pickers in the Round at a local bar. During college I was a member of a guitar ensemble.
* I enjoying hiking and have had the opportunity to hike the Foothills Trail, the Appalachian Trail, and the mountains of New Mexico.
* Since working as a tour guide for [Marshgrass Adventures](http://www.marshgrassadventures.com/) I am on the water any chance I get, both for excitement like the Nantahala and the Colorado River and as a chance to explore the wildlife of the Everglades and local lakes.

<script src="/js/progressbar.js"></script>
<script src="/js/experienceBars.js"></script>

<script>
	var expByLanguage = {
	    C: "Coursework and Projects included parallel programming through threads and forks, structure-based design, n-dimensional pointers, distributed programming using OpenMP and MPI, <a href='https://github.com/30percent/InProcessMultiThreading'>linux library shims</a>, <a href='https://github.com/30percent/C-Translation'>code-translation</a>, and image processing.",
	    Java: "Coursework included TCP and UDP communication, parallel programming through threads and forks, and OOP design patterns.",
	    Python: "Object-Oriented design, sockets, and web-based servers using Django",
	    PHP: "Database communication, AJAX support, and external API based programming",
	    Javascript: "External API based programming, JSON parsing, interactive display, and AJAX support",
	    HTML: "Adaptive layouts, design through templating"
	};
	$(window).load(function() {
		$(".experience").each(function(){
			(typeof this.dataset.name !== 'undefined' && (typeof expByLanguage[this.dataset.name] !== 'undefined')) ? expDef = expByLanguage[this.dataset.name] : expDef = "";
			createExpBarForDiv(this, expDef);
		});
	});
</script>