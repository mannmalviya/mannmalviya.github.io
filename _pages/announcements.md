---  
layout: page  
title: Announcements  
permalink: /announcements/  
description: All my announcements and updates  
nav: false  
---  
  
<!-- Display all announcements -->  
<div class="announcements-archive">  
  {% assign sorted_announcements = site.announcements | sort: 'date' | reverse %}  
  {% for announcement in sorted_announcements %}  
    <div class="announcement-item">  
      <h3><a href="{{ announcement.url | relative_url }}">{{ announcement.title }}</a></h3>  
      <p class="date">{{ announcement.date | date: "%B %d, %Y" }}</p>  
      <p class="excerpt">{{ announcement.excerpt | strip_html | truncatewords: 30 }}</p>  
    </div>  
    <hr>  
  {% endfor %}  
</div>
