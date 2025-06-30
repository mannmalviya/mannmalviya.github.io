---  
layout: page  
title: Notes  
permalink: /Notes/  
description: A growing collection of my academic notes and study materials.  
nav: true  
nav_order: 2  
display_categories: [Theoretical Computer Science, Systems & Programming,Math, Physics]  
horizontal: false  
---  
  
<!-- pages/notes.md -->  
<div class="projects">  
{% if site.enable_project_categories and page.display_categories %}  
  <!-- Display categorized notes -->  
  {% for category in page.display_categories %}  
  <a id="{{ category }}" href=".#{{ category }}">  
    <h2 class="category">{{ category }}</h2>  
  </a>  
  {% assign categorized_notes = site.notes | where: "category", category %}  
  {% assign sorted_notes = categorized_notes | sort: "importance" %}  
  <!-- Generate cards for each note -->  
  {% if page.horizontal %}  
  <div class="container">  
    <div class="row row-cols-1 row-cols-md-2">  
    {% for project in sorted_notes %}  
      {% include projects_horizontal.liquid %}  
    {% endfor %}  
    </div>  
  </div>  
  {% else %}  
  <div class="row row-cols-1 row-cols-md-3">  
    {% for project in sorted_notes %}  
      {% include projects.liquid %}  
    {% endfor %}  
  </div>  
  {% endif %}  
  {% endfor %}  
  
{% else %}  
  
<!-- Display notes without categories -->  
  
{% assign sorted_notes = site.notes | sort: "importance" %}  
  
  <!-- Generate cards for each note -->  
  
{% if page.horizontal %}  
  
  <div class="container">  
    <div class="row row-cols-1 row-cols-md-2">  
    {% for project in sorted_notes %}  
      {% include projects_horizontal.liquid %}  
    {% endfor %}  
    </div>  
  </div>  
  {% else %}  
  <div class="row row-cols-1 row-cols-md-3">  
    {% for project in sorted_notes %}  
      {% include projects.liquid %}  
    {% endfor %}  
  </div>  
  {% endif %}  
{% endif %}  
</div>

