---  
layout: page  
title: Introduction to Data Structures and Algorithms  
description: Based on UCSC's CSE-101   
img: assets/img/tree.png  
importance: 1  
pdf_file: cse_101_Sesh_2022_notes.pdf
books:
    - title: Introduction to Algorithms
      author: Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein
      image: assets/img/Clrs.jpeg
video_playlist_url1: https://www.youtube.com/playlist?list=PLOQjlWvnI0fY1BCDxdiUSwkRHjnNI73G6
video_playlist_url2: https://www.youtube.com/playlist?list=PLOQjlWvnI0fZGffr1_MqCoaC5nUVtQIWz
category: Theoretical Computer Science  
---  
  
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
📺 [CSE-101, Fall 2022, Intro. to Data Structures & Algorithms]({{ page.video_playlist_url1 }})  
📺 [CSE-101, Fall 2020, Intro. to Data Structures & Algorithms]({{ page.video_playlist_url2 }})  
{% endif %}

<!-- Your regular note content here -->  
{% if page.pdf_file %}
## My Notes
<iframe src="{{ '/assets/pdf/' | append: page.pdf_file | relative_url }}" width="100%" height="600px" style="border: none;">
  <p>Your browser does not support PDFs. <a href="{{ '/assets/pdf/' | append: page.pdf_file | relative_url }}">Download the PDF</a>.</p>
</iframe>
{% endif %}


