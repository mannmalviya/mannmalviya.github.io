---  
layout: page  
title: Logic Design  
description: Based on UCSC's CSE-100   
img: assets/img/flipflop.png  
importance: 3  
pdf_file: cse_101_Sesh_2022_notes.pdf
books:
    - title: Digital Design and Computer Architecture
      author: David Harris & Sarah Harris
      image: assets/img/Harris_Harris.png
video_playlist_url1: https://www.youtube.com/playlist?list=PLLHwVz4euyqgKJ8rizbW7ZWNbusXobms7
video_playlist_url2: https://www.youtube.com/playlist?list=PLLHwVz4euyqhs6m5Ax3M3L9GMtOofH6KL

category: Systems & Programming  
---  
  
Add cse225 notes as bonus at the end after cse100 notes!

{% if page.books %}
## Course Textbook

{% for book in page.books %}
<div style="display: flex; align-items: center; margin-bottom: 20px;">
  <img src="{{ book.image | relative_url }}" alt="Cover of {{ book.title }}" style="height: 150px; margin-right: 20px; border: 1px solid #ccc;">
  <div>
    <strong>{{ book.title }}</strong><br>
    <em>by {{ book.author }}</em>
  </div>
</div>
{% endfor %}

{% endif %}

{% if page.video_playlist_url1 %}
## Lecture Videos
📺 [CSE-100, Fall 2024, Logic Design]({{ page.video_playlist_url1 }})  
📺 [CSE-225, Spring 2025, Logic Design with Verilog (graduate version)]({{ page.video_playlist_url2 }})  
{% endif %}

<!-- Your regular note content here -->  
{% if page.pdf_file %}
## My Notes
<iframe src="{{ '/assets/pdf/' | append: page.pdf_file | relative_url }}" width="100%" height="600px" style="border: none;">
  <p>Your browser does not support PDFs. <a href="{{ '/assets/pdf/' | append: page.pdf_file | relative_url }}">Download the PDF</a>.</p>
</iframe>
{% endif %}




