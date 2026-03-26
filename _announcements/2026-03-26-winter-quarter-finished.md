---  
title: "Wrapped up Winter Quarter at UCSC!"  
date: 2026-03-26  
description: ""  
layout: announcement
published: true

---  

Just wrapped up my Winter Quarter at UCSC. From machine translation systems to full-stack apps, and a lot of life stuff in between!



### **Academic**

This quarter, I took a class on Machine Learning for NLP (CSE244B) and a class on Full Stack Web Development (CSE186), along with a Gen Ed on cultures and astronomy (ASTR49).



<u><strong><span style="font-size: 1.1em;"><a href="https://courses.engineering.ucsc.edu/courses/cse244B">CSE244B</a> — Machine Learning for NLP (focused on machine translation systems)</span></strong></u>

**About the class:**

The class was focused on the problem of Machine Translation, particulalry:

* Statistical Machine Translation (SMT) &
* Neural Machine Translation (NMT)

Roughly 75% of the class was on Statistical MT and only the last 25% covered Neural MT. 

In teams, we implemented each component of a phrase-based machine translation system (from scratch!) and then assembled them into a full end-to-end pipeline. Our system translated between Hindi ↔ English.

<img src="{{ 'assets/img/announcements/winter_quarter_post/SMT.png' | relative_url }}" width="600">


*The components of our phrase based MT system*

Given the limited time for neural methods, we didn’t build an NMT model from scratch. Instead, we trained existing systems like [Joey NMT](https://github.com/joeynmt/joeynmt) and [Marian NMT](https://marian-nmt.github.io/) to get hands-on experience with modern approaches.



**My thoughts on the class:**

In the Fall, I took a Machine Learning course ([CSE142](https://courses.engineering.ucsc.edu/courses/cse142)) with [Prof. Rudnick](https://alexrudnick.github.io/), who previously worked at Google on Google Translate. He used a lot of NLP-focused examples throughout the course, which really sparked my interest in the field, especially the problem of machine translation.

At the same time, with how prominent AI and LLM-based tools have become, I also wanted to better understand what’s actually going on under the hood. After that class, I knew I wanted to go deeper into NLP, so taking this course felt like a natural next step.

I’m also planning to continue this in the Spring with [CSE143](https://courses.engineering.ucsc.edu/courses/cse143), again taught by Prof. Rudnick.



I learnt a lot about using ML for the problem of machine translation. I was mainly interested in the Neural stuff we did close to the end of the class. 

Some of my key takeaways:

* A clearer understanding of sequence-to-sequence models
* How encoder–decoder architectures work
* High-level intuition for RNNs, LSTMs, attention mechanisms, and Transformers

Since we didn’t implement these models from scratch, my understanding is more conceptual than implementation-level—for now.



<u><strong><span style="font-size: 1.1em;"><a href="https://courses.engineering.ucsc.edu/courses/cse186">CSE186</a> — Full Stack Web Development I</span></strong></u>

**About the class:**

This class felt a lot like a fast-paced coding bootcamp. Assignments were due every week, with each one building directly on concepts from the previous weeks, so things ramped up quickly.

The final project was a 2-week mini project where we built a Facebook-like application from scratch.

Tech stack & concepts covered:

<div style="display: flex; gap: 2rem;">
<div><strong>Frontend</strong><ul><li>HTML & CSS</li><li>JavaScript</li><li>DOM manipulation</li><li>React (SPAs, responsive design)</li></ul></div>
<div><strong>Backend</strong><ul><li>Node.js + Express</li><li>Server communication</li></ul></div>
<div><strong>Database</strong><ul><li>PostgreSQL</li></ul></div>
<div><strong>Concepts</strong><ul><li>Authentication (JWTs)</li><li>Large-scale deployment</li><li>Security</li></ul></div>
</div>

<img src="{{ 'assets/img/announcements/winter_quarter_post/cse186_tech_stack.png' | relative_url }}" width="600">
*The tech stack used*


**My thoughts on the class:**

There were things I liked and disliked about this class.

What I liked was how relevant it was to real-world full-stack development. We used a modern tech stack and followed practices that felt very close to industry. I also appreciated that we built everything from scratch, starting from basic HTML and CSS and gradually working our way up to a full application.

What I didn’t like was the grading system. We had to write our own test scripts and hope they aligned with the hidden autograder tests. I understand the intention, to simulate real-world development where you’re responsible for testing your own code, but in practice, it often felt like shooting in the dark.

I learnt:

* Test Driven Development (TDD)
* writing code in JavaScript
* writing REST API’s in ExpressJS
* Developing frontends with React
* Implementing authentication using JWTs



---

### **Life & Other**

Celebrated my dad’s 50th birthday 🎉

Attended a guest lecture by Grant Sanderson (3Blue1Brown) on high-dimensional spheres, surreal to see someone whose videos I’ve watched for years in person.

<img src="{{ 'assets/img/announcements/winter_quarter_post/3b1b.png' | relative_url }}" width="600">
*pic I took at the talk*


He also posted the recording of the talk on his YT channel. [Link](https://www.youtube.com/watch?v=fsLh-NYhOoU&t=1455s)

Went to a climbing gym for the first time, so I’m basically Alex Honnold now...

Also, hit up the grappling club open mat the same day… right after climbing and a leg day.

In hindsight, this was a terrible idea.



**Gym progress**

Great consistency in the gym this quarter. Basically went 4-5 times every single week (with an exception of 2 weeks where I only went twice)

![alt text]({{ 'assets/img/announcements/winter_quarter_post/winter_gym.png' | relative_url }})


*From [Hevy](https://hevy.com/user/zyzz7)*

**LeetCode progress**

Started the Year off really strong, was really trying to get the january badge for daily challenge problems. But by the end of Jan I realised I am nowhere near good enough to do most of these problems, and I was ending up just looking at the solution for really hard problems. Then, as usual, I got busy with school & life, and basically completely stopped doing leetcode :(

![alt text]({{ 'assets/img/announcements/winter_quarter_post/winter_lc.png' | relative_url }})


*From [LeetCode](https://leetcode.com/u/lvl12-Tensor-Boi/)*


**Chess progress**

I had started taking chess classes last Fall, but my mum thinks chess is a complete waste of time and told me to focus on getting a job first.

Basically, no chess progress this quarter. I try to play a blitz/bullet game or two each day to keep my daily streak going (at 408 days as of writing this)
